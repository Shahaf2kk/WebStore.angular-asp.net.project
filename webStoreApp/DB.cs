﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using webStoreApp.Model;

namespace webStoreApp
{
    public static class DB
    {
        public static string con;

        public static class Users
        {
            public static User SignIn(User user)
            {
                if (string.IsNullOrEmpty(user.userName) || string.IsNullOrEmpty(user.pass))
                {
                    return null;
                }
                using (SqlConnection conn = new SqlConnection(con))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("UPDATE users SET lastLogin=@lastLogin WHERE userName=@userName AND userPass=@userPass", conn))
                    {
                        cmd.Parameters.AddWithValue("@lastLogin", DateTimeOffset.Now);
                        cmd.Parameters.AddWithValue("@userName", user.userName);
                        cmd.Parameters.AddWithValue("@userPass", user.pass);
                        if (cmd.ExecuteNonQuery() != 1)
                            return null;
                    }
                    user.pass = null;
                    return user;
                }
            }
            public static User SignUp(User user)
            {
                if (string.IsNullOrEmpty(user.userName) || string.IsNullOrEmpty(user.pass) || string.IsNullOrEmpty(user.email))
                {
                    user.pass = null;
                    return user;
                }
                using (SqlConnection conn = new SqlConnection(con))
                {
                    conn.Open();
                    if (!CheckUsername(user, conn) || !CheckUserEmail(user, conn))
                    {
                        user = null;
                        return user;
                    }

                    using (SqlCommand cmd = new SqlCommand("INSERT INTO users(userName, userEmail, userPass, lastLogin) " +
                        "VALUES (@userName, @userEmail, @userPass, @lastLogin)", conn))
                    {
                        cmd.Parameters.AddWithValue("@userName", user.userName);
                        cmd.Parameters.AddWithValue("@userEmail", user.email);
                        cmd.Parameters.AddWithValue("@userPass", user.pass);
                        cmd.Parameters.AddWithValue("@lastLogin", DateTimeOffset.Now);
                        if (cmd.ExecuteNonQuery() != 1)
                            return null;
                    }
                }
                user = UserService.GetToken(user);
                if (user == null)
                    return null;
                return user;
            }
            private static bool CheckUsername(User user, SqlConnection conn)
            {
                using (SqlCommand cmd = new SqlCommand("SELECT userName FROM users WHERE userName=@userName", conn))
                {
                    cmd.Parameters.AddWithValue("@userName", user.userName);
                    using (SqlDataReader rd = cmd.ExecuteReader())
                    {
                        while (rd.Read())
                        {
                            return false;
                        }
                        return true;
                    }
                }
            }
            private static bool CheckUserEmail(User user, SqlConnection conn)
            {
                using (SqlCommand cmd = new SqlCommand("SELECT userName FROM users WHERE userEmail=@userEmail", conn))
                {
                    cmd.Parameters.AddWithValue("@userEmail", user.email);
                    using (SqlDataReader rd = cmd.ExecuteReader())
                    {
                        while (rd.Read())
                        {
                            return false;
                        }
                        return true;
                    }
                }
            }
        }

        public static class Products
        {
            public static IActionResult GetProductsById(int id)
            {
                using (SqlConnection conn = new SqlConnection(con))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SELECT product_id, product_category, product_sub_category," +
                        " product_name, product_description, product_price, product_image_path FROM product WHERE product_id = @product_id ", conn))
                    {
                        cmd.Parameters.AddWithValue("@product_id", id);
                        using (SqlDataReader rd = cmd.ExecuteReader())
                        {
                            while (rd.Read())
                            {
                                product product = new product
                                {
                                    id = rd.GetInt32(0),
                                    category = rd.GetString(1),
                                    subCategory = rd.GetString(2),
                                    name = rd.GetString(3),
                                    description = rd.GetString(4),
                                    price = (decimal)rd.GetDecimal(5),
                                    imagePath = !rd.IsDBNull(6) ? rd.GetString(6) : null
                                };
                                return new OkObjectResult(product);
                            }
                            return new BadRequestResult();
                        }
                    }
                }
            }
            public static IActionResult GetProductsCate()
            {
                List<productsCategoryNames> productsNames = new List<productsCategoryNames>();
                using (SqlConnection conn = new SqlConnection(con))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SELECT product_category, product_sub_category FROM product", conn))
                    {
                        using (SqlDataReader rd = cmd.ExecuteReader())
                        {
                            while (rd.Read())
                            {
                                productsCategoryNames names = new productsCategoryNames();
                                names.categoryNames = rd.GetString(0);
                                names.subCategoryNamesArray = new List<string> { rd.GetString(1) };

                                if (productsNames.Count == 0)
                                {
                                    productsNames.Add(names);
                                    continue;
                                }

                                int index = productsNames.FindIndex(x => x.categoryNames == names.categoryNames);
                                if (index != -1)
                                {
                                    if (!productsNames[index].subCategoryNamesArray.Exists(x => x == names.subCategoryNamesArray[0]))
                                    {
                                        productsNames[index].subCategoryNamesArray.Add(names.subCategoryNamesArray[0]);
                                    }
                                    continue;
                                }
                                productsNames.Add(names);
                            }
                            return new OkObjectResult(productsNames);
                        }
                    }
                }
            }
            public static IActionResult GetProductsByCate(string category)
            {
                if(string.IsNullOrEmpty(category))
                    return new NotFoundResult();
                List<product> products = new List<product>();
                using(SqlConnection conn = new SqlConnection(con))
                {
                    conn.Open();
                    using(SqlCommand cmd = new SqlCommand("SELECT product_id, product_category, product_sub_category," +
                        " product_name, product_description, product_price, product_image_path FROM product WHERE product_category = @product_category", conn))
                    {   
                        cmd.Parameters.AddWithValue("@product_category", category);
                        using(SqlDataReader rd = cmd.ExecuteReader())
                        {
                            while(rd.Read())
                            {
                                product product = new product
                                {
                                    id = rd.GetInt32(0),
                                    category = rd.GetString(1),
                                    subCategory = rd.GetString(2),
                                    name = rd.GetString(3),
                                    description = rd.GetString(4),
                                    price = (decimal)rd.GetDecimal(5),
                                    imagePath = !rd.IsDBNull(6) ? rd.GetString(6) : null
                                };
                                products.Add(product);
                            }
                            if (products == null)
                                return new BadRequestResult();
                            return new OkObjectResult(products);
                        }
                    }
                }
            }
            public static IActionResult GetProductsBySubCat(string category, string subCategory)
            {
                using (SqlConnection conn = new SqlConnection(con))
                {
                    if (string.IsNullOrEmpty(category) || string.IsNullOrEmpty(subCategory))
                        return new BadRequestResult();
                    conn.Open();
                    List<product> products = new List<product>();
                    using (SqlCommand cmd = new SqlCommand("SELECT product_id, product_category, product_sub_category," +
                        " product_name, product_description, product_price, product_image_path FROM product" +
                        " WHERE product_category = @product_category AND product_sub_category = @product_sub_category", conn))
                    {
                        cmd.Parameters.AddWithValue("@product_category", category);
                        cmd.Parameters.AddWithValue("@product_sub_category", subCategory);
                        using (SqlDataReader rd = cmd.ExecuteReader())
                        {
                            while (rd.Read())
                            {
                                product product = new product
                                {
                                    id = rd.GetInt32(0),
                                    category = rd.GetString(1),
                                    subCategory = rd.GetString(2),
                                    name = rd.GetString(3),
                                    description = rd.GetString(4),
                                    price = (decimal)rd.GetDecimal(5),
                                    imagePath = !rd.IsDBNull(6) ? rd.GetString(6) : null
                                };
                                products.Add(product);
                            }
                            return new OkObjectResult(products);
                        }
                    }
                }
            }
            // public static IActionResult GetProductTop
        }

        public static class CartShop
        {
            //public static IActionResult getCartProduct(string userName)
            //{
            //    if (string.IsNullOrEmpty(userName))
            //        return new BadRequestResult();
            //    using(SqlConnection conn = new SqlConnection(con))
            //    {
            //        conn.Open();
            //        using(SqlCommand cmd = new SqlCommand("SELECT product.product_id, product.product_name, cart.qty, product.product_price," +
            //            " cart.qty * product.product_price AS total_price FROM cart JOIN product ON cart.product_id = product.product_id" +
            //            " WHERE cart.userName = @userName", conn))
            //        {
            //            cmd.Parameters.AddWithValue("@userName", userName);
            //            using(SqlDataReader rd = cmd.ExecuteReader())
            //            {
            //                List<Cart> cart = new List<Cart>();
            //                while(rd.Read())
            //                {
            //                    Cart cartRow = new Cart
            //                    {
            //                        productDetails = new product
            //                        {
            //                            id = rd.GetInt32(0),
            //                            name = rd.GetString(1),
            //                            price = (decimal)rd.GetDecimal(3)
            //                        },
            //                        totalCost = (decimal)rd.GetDecimal(4),
            //                        qty = rd.GetInt32(2),
            //                    };
            //                    cart.Add(cartRow);
            //                }
            //                return new OkObjectResult(cart);
            //            }
            //        }
            //    }
            //}
            public static IActionResult setCartProduct(Cart cart, string userName)
            {
                if (cart.productDetails.id.ToString() == null || cart.qty.ToString() == null || string.IsNullOrEmpty(userName))
                    return new BadRequestResult();
                using (SqlConnection conn = new SqlConnection(con))
                {
                    conn.Open();
                    using(SqlCommand cmd = new SqlCommand("INSERT INTO cart(userName, product_id, qty)" +
                        " VALUES (@userName, @productId, @cartQty) ", conn))
                    {
                        cmd.Parameters.AddWithValue("@userName", userName);
                        cmd.Parameters.AddWithValue("@productId", cart.productDetails.id);
                        cmd.Parameters.AddWithValue("@cartQty", cart.qty);
                        if(cmd.ExecuteNonQuery() == 1)
                            return new OkResult();
                    }
                }
                return new BadRequestResult();
            }
        }

        public static class GetUserData
        {
            // get details from cart table or in the same request query with relantion tables get cart detils?
            public static IActionResult getUserSigninData(string username)
            {
                using (SqlConnection conn = new SqlConnection(con))
                {
                    conn.Open();
                    if (!SigninByToken(username, conn))
                        return new NotFoundObjectResult("invalide user name " + username);
                    using (SqlCommand cmd = new SqlCommand("SELECT product_id, qty FROM cart WHERE userName=@username", conn))
                    {
                        cmd.Parameters.AddWithValue("@username", username);
                        using (SqlDataReader rd = cmd.ExecuteReader())
                        {
                            List<Cart> cartDetailsList = new List<Cart>();
                            UserData userData;
                            while (rd.Read())
                            {
                                Cart cartDetails = new Cart
                                {
                                    productDetails = new product() { id = rd.GetInt32(0) },
                                    qty = rd.GetInt32(1)
                                };
                                cartDetailsList.Add(cartDetails);
                            }
                            userData = new UserData
                            {
                                userName = username,
                                cartDetails = cartDetailsList
                            };
                            return new OkObjectResult(userData);
                        }
                    }
                }
            }
            public static IActionResult getUserCartProduct(UserData user)
            {
                using (SqlConnection conn = new SqlConnection(con))
                {
                    conn.Open();
                    if (!SigninByToken(user.userName, conn))
                        return new NotFoundResult();
                    
                    using(SqlCommand cmd = new SqlCommand("SELECT product.product_id, product.product_category, " +
                        "product.product_sub_category, product.product_name, product.product_description," +
                        " product.product_price, product.product_image_path, cart.qty," +
                        " (cart.qty * product.product_price) AS total FROM product" +
                        " INNER JOIN cart ON(product.product_id = cart.product_id) " +
                        "WHERE cart.userName = @userName", conn))
                    {
                        cmd.Parameters.AddWithValue("@userName", user.userName);
                        using(SqlDataReader rd = cmd.ExecuteReader())
                        {
                            List<Cart> productsCart = new List<Cart>();
                            while(rd.Read())
                            {
                                Cart cart = new Cart
                                {
                                    productDetails = new product
                                    {
                                        id = rd.GetInt32(0),
                                        category = rd.GetString(1),
                                        subCategory = rd.GetString(2),
                                        name = rd.GetString(3),
                                        description = rd.GetString(4),
                                        price = (decimal)rd.GetDecimal(5),
                                        imagePath = !rd.IsDBNull(6) ? rd.GetString(6) : null
                                    },
                                    qty = rd.GetInt32(7),
                                    totalCost = rd.GetDecimal(8)
                                };
                                productsCart.Add(cart);
                            }
                            if (productsCart != null)
                                return new OkObjectResult(productsCart);
                            return new NotFoundResult();
                        }
                    }
                }
            }
            private static bool SigninByToken(string username, SqlConnection conn)
            {
                using(SqlCommand cmd = new SqlCommand("UPDATE users SET lastLogin=@lastLogin " +
                    "WHERE userName=@userName", conn))
                {
                    cmd.Parameters.AddWithValue("@lastLogin", DateTimeOffset.Now);
                    cmd.Parameters.AddWithValue("@userName", username);
                    if (cmd.ExecuteNonQuery() == 1)
                        return true;
                    return false;
                }
            }
        }
    }

}

