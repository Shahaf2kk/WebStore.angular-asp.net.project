using Microsoft.AspNetCore.Mvc;
using System;
using System.Text;
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
            public static IActionResult GetStartUpData()
            {
                productData productData = new productData();
                using (SqlConnection conn = new SqlConnection(con))
                {
                    conn.Open();
                    productData.productsCateNames = GetProductsCate(conn);
                    productData.productsNames = GetProductsNames(conn);
                    productData.topProducts = getTopProducts(conn, productData.productsCateNames);
                }
                return new OkObjectResult(productData);
            }


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
                                product.splitImageToArray(product.imagePath);
                                return new OkObjectResult(product);
                            }
                            return new BadRequestResult();
                        }
                    }
                }
            }

            public static IActionResult GetProductsSearch(int[] ArrayProducts)
            {

                using (SqlConnection conn = new SqlConnection(con))
                {
                    List<product> products = new List<product>();
                    conn.Open();
                    for (int i = 0; i < ArrayProducts.Length; i++)
                    {
                        string command = "SELECT * FROM product WHERE product.product_id = " + ArrayProducts[i].ToString();
                        using (SqlCommand cmd = new SqlCommand(command, conn))
                        {
                            using (SqlDataReader rd = cmd.ExecuteReader())
                            {
                                if (rd.Read())
                                {
                                    product product = new product
                                    {
                                        id = rd.GetInt32(0),
                                        category = rd.GetString(1),
                                        subCategory = rd.GetString(2),
                                        name = rd.GetString(3),
                                        description = rd.GetString(4),
                                        price = (decimal)rd.GetDecimal(5),
                                        imagePath = rd.IsDBNull(6) ? null : rd.GetString(6)
                                    };
                                    product.splitImageToArray(product.imagePath);
                                    products.Add(product);
                                }
                            }
                        }
                    }
                    return new OkObjectResult(products);
                }
            }

            public static IActionResult GetProductsByCate(string category)
            {
                if (string.IsNullOrEmpty(category))
                    return new NotFoundResult();
                List<product> products = new List<product>();
                using (SqlConnection conn = new SqlConnection(con))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SELECT product_id, product_category, product_sub_category," +
                        " product_name, product_description, product_price, product_image_path FROM product WHERE product_category = @product_category", conn))
                    {
                        cmd.Parameters.AddWithValue("@product_category", category);
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
                                    imagePath = rd.IsDBNull(6) ? null : rd.GetString(6)
                                };
                                product.splitImageToArray(product.imagePath);
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
                                product.splitImageToArray(product.imagePath);
                                products.Add(product);
                            }
                            return new OkObjectResult(products);
                        }
                    }
                }
            }

            private static List<product> getTopProducts(SqlConnection conn, List<productsCategoryNames> listOfCategoriesNames)
            {
                List<product> topFiveProduct = new List<product>();
                foreach (productsCategoryNames cate in listOfCategoriesNames)
                {
                    StringBuilder commandB = new StringBuilder();
                    commandB.Append("SELECT TOP(5) * FROM product WHERE product.product_category = '");
                    commandB.Append(cate.categoryNames);
                    commandB.Append("'");
                    using (SqlCommand cmd = new SqlCommand(commandB.ToString(), conn))
                    {
                        using (SqlDataReader rd = cmd.ExecuteReader())
                        {

                            while (rd.Read())
                            {
                                product product = new product();
                                product.id = rd.GetInt32(0);
                                product.category = rd.GetString(1);
                                product.subCategory = rd.GetString(2);
                                product.name = rd.GetString(3);
                                product.description = rd.GetString(4);
                                product.price = (decimal)rd.GetDecimal(5);
                                product.imagePath = rd.GetString(6);
                                product.splitImageToArray(product.imagePath);
                                topFiveProduct.Add(product);
                            }
                        }
                    }
                }
                return topFiveProduct;
            }

            private static List<productsCategoryNames> GetProductsCate(SqlConnection conn)
            {
                List<productsCategoryNames> categoriesNames = new List<productsCategoryNames>();

                    using (SqlCommand cmd = new SqlCommand("SELECT product_category, product_sub_category FROM product", conn))
                    {
                        using (SqlDataReader rd = cmd.ExecuteReader())
                        {
                            while (rd.Read())
                            {
                                productsCategoryNames names = new productsCategoryNames();
                                names.categoryNames = rd.GetString(0);
                                names.subCategoryNamesArray = new List<string> { rd.GetString(1) };

                                if (categoriesNames.Count == 0)
                                {
                                    categoriesNames.Add(names);
                                    continue;
                                }

                                int index = categoriesNames.FindIndex(x => x.categoryNames == names.categoryNames);
                                if (index != -1)
                                {
                                    if (!categoriesNames[index].subCategoryNamesArray.Exists(x => x == names.subCategoryNamesArray[0]))
                                    {
                                        categoriesNames[index].subCategoryNamesArray.Add(names.subCategoryNamesArray[0]);
                                    }
                                    continue;
                                }
                                categoriesNames.Add(names);
                            }
                            return categoriesNames;
                        }
                    }
            }

            private static List<productsNames> GetProductsNames(SqlConnection conn)
            {
                List<productsNames> productsNames = new List<productsNames>();
                using (SqlCommand cmd = new SqlCommand("SELECT product_id, product_name FROM product", conn))
                {
                    using (SqlDataReader rd = cmd.ExecuteReader())
                    {
                        while (rd.Read())
                        {
                            productsNames _productsNames = new productsNames();
                            _productsNames.id = rd.IsDBNull(0) ? -1 : rd.GetInt32(0);
                            _productsNames.name = rd.IsDBNull(1) ? "" : rd.GetString(1);
                            if (_productsNames.id == -1|| _productsNames.name == "")
                                continue;
                            productsNames.Add(_productsNames);
                        }
                        return productsNames;
                    }
                }
            }
        }

        public static class CartShop
        {
            public static IActionResult AddOrUpdateCartProduct(string username, int productId, int qty, bool updateLow)
            {
                using (SqlConnection conn = new SqlConnection(con))
                {
                    conn.Open();
                    int cartId = GetCartId(conn, username);
                    if (cartId == 0)
                    {
                        cartId = SetCart(username, conn);
                        if (cartId == -1)
                            return new BadRequestResult();
                    }
                    if (updateLow)
                    {
                        int newQty = qty;
                        using (SqlCommand cmd = new SqlCommand("UPDATE cartDetails SET cartDetails.qty = @newQty " +
                            "WHERE cartDetails.product_id = @product_id AND cartDetails.cart_id = @cart_id", conn))
                        {
                            cmd.Parameters.AddWithValue("@newQty", newQty);
                            cmd.Parameters.AddWithValue("@product_id", productId);
                            cmd.Parameters.AddWithValue("@cart_id", cartId);
                            if (cmd.ExecuteNonQuery() == 1)
                                return new OkObjectResult(newQty);
                        }
                    }

                    int oldQty = GetQty(productId, cartId, conn);
                    if(oldQty == -1)
                    {
                        using (SqlCommand cmd = new SqlCommand("INSERT INTO cartDetails VALUES(@cart_id, @product_id, @qty)", conn))
                        {
                            cmd.Parameters.AddWithValue("@cart_id", cartId);
                            cmd.Parameters.AddWithValue("@product_id", productId);
                            cmd.Parameters.AddWithValue("@qty", qty);
                            if (cmd.ExecuteNonQuery() == 1)
                                return new OkObjectResult(qty);
                        }
                    }
                    else
                    {
                        qty += oldQty;
                        using (SqlCommand cmd = new SqlCommand("UPDATE cartDetails SET qty = @qty " +
                        "WHERE cartDetails.product_id = @product_id AND cartDetails.cart_id = @cart_id", conn))
                        {
                            cmd.Parameters.AddWithValue("@qty", qty);
                            cmd.Parameters.AddWithValue("@product_id", productId);
                            cmd.Parameters.AddWithValue("@cart_id", cartId);
                            if (cmd.ExecuteNonQuery() == 1)
                                return new OkObjectResult(qty);
                        }
                    }

                    return new BadRequestResult();

                }
            }

            public static IActionResult DeleteCartProduct(SqlConnection conn, List<int> products, string username)
            {
                StringBuilder command = new StringBuilder();
                command.Append("DELETE cartDetails WHERE cartDetails.cart_id = @cartId AND ");
                if (products.Count == 1)
                    command.Append("cartDetails.product_id = @productId0");

                for (int i = 0; i < products.Count && products.Count != 1; i++)
                {
                    if (i == 0)
                        command.Append("cartDetails.product_id IN ( @productId" + i + ",");
                    if (i > 0)
                        command.Append("@productId" + i + ",");

                    if (i == products.Count - 1)
                    {
                        command.Remove(command.Length - 1, 1);
                        command.Append(")");
                    }
                }

                int cartId;
                bool isDelete;

                if (conn == null)
                {
                    using (SqlConnection _conn = new SqlConnection(con))
                    {
                        _conn.Open();
                        cartId = GetCartId(_conn, username);
                        if (cartId == 0)
                            return new BadRequestResult();

                        isDelete = DeleteProductsCommand(_conn, products, command, cartId);
                    }
                }
                else
                {
                    cartId = GetCartId(conn, username);
                    if (cartId == 0)
                        return new BadRequestResult();

                    isDelete = DeleteProductsCommand(conn, products, command, cartId);
                }


                if (isDelete)
                    return new OkResult();

                return new BadRequestResult();
            }


            private static int GetQty(int productId, int cartId, SqlConnection conn)
            {
                using (SqlCommand cmd = new SqlCommand("SELECT cartDetails.qty FROM cartDetails " +
                        "WHERE cartDetails.cart_id = @cart_id AND cartDetails.product_id = @product_id", conn))
                {
                    cmd.Parameters.AddWithValue("@product_id", productId);
                    cmd.Parameters.AddWithValue("@cart_id", cartId);
                    using (SqlDataReader rd = cmd.ExecuteReader())
                    {
                        if(rd.Read())
                        {
                            return rd.IsDBNull(0) ? 0 : rd.GetInt32(0);
                        }
                    }
                }
                return -1;
            }

            private static int SetCart(string username, SqlConnection conn)
            {
                using (SqlCommand cmd = new SqlCommand("INSERT INTO cart OUTPUT INSERTED.cart_id VALUES( @username )", conn))
                {
                    cmd.Parameters.AddWithValue("@username", username);

                    using (SqlDataReader rd = cmd.ExecuteReader())
                    {
                        if (rd.Read())
                        {
                            return rd.IsDBNull(0) ? -1 : rd.GetInt32(0);
                        }
                        return -1;
                    }
                }
            }

            private static bool DeleteProductsCommand(SqlConnection conn, List<int> products, StringBuilder command, int cartId)
            {
                using (SqlCommand cmd = new SqlCommand(command.ToString(), conn))
                {
                    cmd.Parameters.AddWithValue("@cartId", cartId);

                    for (int i = 0; i < products.Count; i++)
                    {
                        cmd.Parameters.AddWithValue("@productId" + i, products[i]);
                    }

                    return cmd.ExecuteNonQuery() > 0;
                }
            }

            private static int GetCartId(SqlConnection conn, string username)
            {
                using (SqlCommand cmd = new SqlCommand("SELECT cart.cart_id FROM cart WHERE userName = @userName", conn))
                {
                    cmd.Parameters.AddWithValue("@userName", username);
                    using (SqlDataReader rd = cmd.ExecuteReader())
                    {
                        if (rd.Read())
                        {
                            return rd.IsDBNull(0) ? 0 : rd.GetInt32(0);
                        }
                        return 0;
                    }
                }
            }
        }

        public static class Orders
        {
            public static IActionResult SetOrder(string username, Order order)
            {
                if (string.IsNullOrEmpty(username) || order == null)
                    return new BadRequestResult();

                using (SqlConnection conn = new SqlConnection(con))
                {
                    conn.Open();
                    int shipId = SetShipAddress(order.shipDetails, conn);
                    if (shipId == 0)
                        return new BadRequestResult();

                    int orderId = InsertOrder(shipId, username, conn);
                    if (orderId == 0)
                        return new BadRequestResult();

                    order = SetOrderDetails(orderId, order, conn);
                    if (order == null)
                        return new BadRequestResult();

                    decimal total = UpdateOrderCost(orderId, conn);
                    if (total == 0)
                        return new BadRequestResult();

                    order.totalCost = total;
                    return new OkObjectResult(order);
                }
            }

            public static IActionResult PayOrder(string username)
            {
                if (string.IsNullOrEmpty(username))
                    return new BadRequestResult();

                using (SqlConnection conn = new SqlConnection(con))
                {
                    conn.Open();
                    int orderId = GetOrderId(username, conn);
                    if (orderId == 0)
                        return new BadRequestObjectResult("order id fail");

                    if (!UpdateOrderPayMent(conn, orderId))
                        return new BadRequestResult();
                
                    List<int> products = GetProductsIdOrder(conn, orderId);
                    if (products == null)
                        return new BadRequestObjectResult("products int fail");

                    return CartShop.DeleteCartProduct(conn, products, username);
                }
            }


            private static List<int> GetProductsIdOrder(SqlConnection conn, int orderId)
            {
                using (SqlCommand cmd = new SqlCommand("SELECT orderDetails.product_id FROM orderDetails WHERE order_id = @orderId", conn))
                {
                    cmd.Parameters.AddWithValue("@orderId", orderId);

                    using (SqlDataReader rd = cmd.ExecuteReader())
                    {
                        List<int> products = new List<int>();
                        for (int i = 0; rd.Read(); i++)
                        {
                            products.Add(rd.GetInt32(0));
                        }
                        return products;
                    }
                }
            }

            private static bool UpdateOrderPayMent(SqlConnection conn, int orderId)
            {
                using (SqlCommand cmd = new SqlCommand("UPDATE orders SET orders.payment_date = @payment_date " +
                    "WHERE orders.order_id = @orderId", conn))
                {
                    cmd.Parameters.AddWithValue("@payment_date", DateTimeOffset.Now);
                    cmd.Parameters.AddWithValue("@orderId", orderId);

                    if (cmd.ExecuteNonQuery() == 1)
                        return true;
                    return false;
                }
            }

            private static decimal UpdateOrderCost(int orderId, SqlConnection con)
            {
                using (SqlCommand cmd = new SqlCommand("UPDATE orders SET total_cost = " +
                    "(SELECT SUM(total_price) FROM orderDetails WHERE orderDetails.order_id = @orderId) " +
                    "OUTPUT inserted.total_cost WHERE orders.order_id = @orderId", con))
                {
                    cmd.Parameters.AddWithValue("@orderId", orderId);
                    using (SqlDataReader rd = cmd.ExecuteReader())
                    {
                        if (rd.Read())
                        {
                            return rd.GetDecimal(0);
                        }
                    }
                    return 0;
                }
            }

            private static Order SetOrderDetails(int orderId, Order order, SqlConnection con)
            {
                StringBuilder command = new StringBuilder();
                command.Append("INSERT INTO orderDetails OUTPUT inserted.total_price VALUES ");
                for (int i = 0; i < order.products.Count; i++)
                {
                    command.Append("( @orderId, " +
                                    "@productId" + i + ", " +
                                    "@productQty" + i + ", " +
                                    "(SELECT product.product_price FROM product WHERE product.product_id = @productId" + i + ") * @productQty" + i + "),");
                    if (i == order.products.Count - 1)
                        command.Remove(command.Length - 1, 1);
                }
                using (SqlCommand cmd = new SqlCommand(command.ToString(), con))
                {
                    cmd.Parameters.AddWithValue("@orderId", orderId);

                    for (int i = 0; i < order.products.Count; i++)
                    {
                        cmd.Parameters.AddWithValue("@productId" + i, order.products[i].id);
                        cmd.Parameters.AddWithValue("@productQty" + i, order.productsQty[i]);
                    }
                    using (SqlDataReader rd = cmd.ExecuteReader())
                    {
                        for (int i = 0; rd.Read() ; i++)
                        {
                            order.products[i].price = rd.GetDecimal(0);
                        }
                    }
                    return order;
                }
            }

            private static int InsertOrder(int shipId, string username, SqlConnection con)
            {
                using (SqlCommand cmd = new SqlCommand("IF NOT EXISTS (SELECT orders.order_id FROM orders WHERE orders.payment_date IS NULL)" +
                    " INSERT INTO orders OUTPUT INSERTED.order_id VALUES(@shipId, @username, 0, NULL) ELSE BEGIN " +
                     "DELETE orderDetails FROM orderDetails INNER JOIN orders ON " +
                     "orderDetails.order_id = orders.order_id WHERE orders.userName = @username AND orders.payment_date IS NULL " +
                    "DELETE orders WHERE orders.userName = @username AND orders.payment_date IS NULL " +
                    "INSERT INTO orders OUTPUT INSERTED.order_id VALUES(@shipId, @username, 0, NULL) END", con))
                {
                    cmd.Parameters.AddWithValue("@shipId", shipId);
                    cmd.Parameters.AddWithValue("@username", username);
                    using (SqlDataReader rd = cmd.ExecuteReader())
                    {
                        if(rd.Read())
                            return rd.IsDBNull(0) ? 0 : rd.GetInt32(0);
                        return 0;
                    }
                }
            }

            private static int GetOrderId(string username, SqlConnection con)
            {
                using (SqlCommand cmd = new SqlCommand("SELECT orders.order_id FROM orders" +
                    " WHERE (orders.userName = @username AND orders.payment_date IS NULL)", con))
                {
                    cmd.Parameters.AddWithValue("@username", username);
                    using (SqlDataReader rd = cmd.ExecuteReader())
                    {
                        if (rd.Read())
                        {
                            return rd.IsDBNull(0) ? 0 : rd.GetInt32(0);
                        }
                        return 0;
                    }
                }
            }

            private static int SetShipAddress(ShipDetails shipDetails, SqlConnection con)
            {
                using (SqlCommand cmd = new SqlCommand("INSERT INTO shipDetails OUTPUT INSERTED.ship_id VALUES( @shipAddress, @shipCity, @shipCountry, @phone )", con))
                {
                    cmd.Parameters.AddWithValue("@shipAddress", shipDetails.shipAddress);
                    cmd.Parameters.AddWithValue("@shipCity", shipDetails.shipCity);
                    cmd.Parameters.AddWithValue("@shipCountry", shipDetails.shipCountry);
                    cmd.Parameters.AddWithValue("@phone", shipDetails.phone);

                    using (SqlDataReader rd = cmd.ExecuteReader())
                    {
                        if(rd.Read())
                            return rd.IsDBNull(0) ? 0 : rd.GetInt32(0);
                        return 0;
                    }
                }
            }
        }

        public static class GetUserData
        {
            public static IActionResult GetUserSigninData(string username)
            {
                using (SqlConnection conn = new SqlConnection(con))
                {
                    conn.Open();
                    if (!SigninByToken(username, conn))
                        return new NotFoundObjectResult("invalide user name " + username);
                    using (SqlCommand cmd = new SqlCommand("SELECT cartDetails.product_id, cartDetails.qty FROM cartDetails " +
                        "INNER JOIN cart ON cartDetails.cart_id = cart.cart_id WHERE cart.userName = @username", conn))
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

                    using (SqlCommand cmd = new SqlCommand("SELECT product.product_id, product.product_category, product.product_sub_category, product.product_name, product.product_description," +
                        "product.product_price, product.product_image_path, cartDetails.qty, (cartDetails.qty * product.product_price) AS total " +
                        "FROM product INNER JOIN cartDetails ON product.product_id = cartDetails.product_id " +
                        "INNER JOIN cart ON cartDetails.cart_id = cart.cart_id WHERE cart.userName = @username", conn))
                    {
                        cmd.Parameters.AddWithValue("@username", user.userName);
                        using (SqlDataReader rd = cmd.ExecuteReader())
                        {
                            List<Cart> productsCart = new List<Cart>();
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
                                product.splitImageToArray(product.imagePath);
                                Cart cart = new Cart
                                {
                                    productDetails = product,
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
                using (SqlCommand cmd = new SqlCommand("UPDATE users SET lastLogin=@lastLogin " +
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

    