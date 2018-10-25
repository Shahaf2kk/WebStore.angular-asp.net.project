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
            public static IActionResult SignIn(User user)
            {
                if (string.IsNullOrEmpty(user.userName) || string.IsNullOrEmpty(user.pass))
                {
                    return new BadRequestObjectResult("user name or passwornd are empty");
                }
                using (SqlConnection conn = new SqlConnection(con))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("UPDATE users SET lastLogin=@lastLogin WHERE userName=@userName AND userPass=@userPass", conn))
                    {
                        cmd.Parameters.AddWithValue("@lastLogin", DateTimeOffset.Now);
                        cmd.Parameters.AddWithValue("@userName", user.userName);
                        cmd.Parameters.AddWithValue("@userPass", user.pass);
                        if (cmd.ExecuteNonQuery() == 1)
                            return new OkResult();
                        return new NotFoundResult();
                    }
                }
            }
            public static IActionResult SignUp(User user)
            {
                if (string.IsNullOrEmpty(user.userName) || string.IsNullOrEmpty(user.pass) || string.IsNullOrEmpty(user.email))
                {
                    return new BadRequestObjectResult("user name or passwornd are empty");
                }
                using (SqlConnection conn = new SqlConnection(con))
                {
                    conn.Open();
                    if (!CheckUsername(user, conn) || !CheckUserEmail(user, conn))
                        return new BadRequestObjectResult("user name or email are in used");

                    using (SqlCommand cmd = new SqlCommand("INSERT INTO users(userName, userEmail, userPass, lastLogin) " +
                        "VALUES (@userName, @userEmail, @userPass, @lastLogin)", conn))
                    {
                        cmd.Parameters.AddWithValue("@userName", user.userName);
                        cmd.Parameters.AddWithValue("@userEmail", user.email);
                        cmd.Parameters.AddWithValue("@userPass", user.pass);
                        cmd.Parameters.AddWithValue("@lastLogin", DateTimeOffset.Now);
                        int c = cmd.ExecuteNonQuery();
                        if(c != 1)
                            return new NotFoundObjectResult("error");

                    }
                }
                user = UserService.UserAuthenticate(user);
                if (user == null)
                    return new NotFoundObjectResult("error");
                return new OkObjectResult(user);
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
            public static List<product> GetProducts()
            {
                List<product> products = new List<product>();
                using (SqlConnection conn = new SqlConnection(con))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SELECT product_id, product_category, product_sub_category," +
                        " product_name, product_description, product_price, product_image_path FROM product", conn))
                    {
                        using (SqlDataReader rd = cmd.ExecuteReader())
                        {
                            while (rd.Read())
                            {
                                product product = new product()
                                {
                                    id = rd.GetInt32(0), //(int)rd["product_id"],
                                    category = rd.GetString(1), //rd["product_category"].ToString(),
                                    subCategory = rd.GetString(2), //rd["product_sub_category"].ToString(),
                                    name = rd.GetString(3), //rd["product_name"].ToString(),
                                    description = rd.GetString(4), //rd["product_description"].ToString(),
                                    price = (decimal)rd.GetDecimal(5), //(int)rd["product_price"],
                                    imagePath = !rd.IsDBNull(6) ? rd.GetString(6): null //rd["product_image_path"].ToString()
                                };
                                products.Add(product);
                            }
                        }
                    }
                }
                return products;
            }
        }
    }

}

