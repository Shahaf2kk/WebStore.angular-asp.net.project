using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using webStoreApp.Model;

namespace webStoreApp
{
    public static class DB
    {
        public static string con; // = @"Data Source=DESKTOP-IVS15MU\SQLEXPRESS;Initial Catalog=AppStore;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";

        public static class users
        {
            public static bool SingIn(string userName, string pass)
            {
                if(string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(pass))
                {
                    return false;
                }
                using (SqlConnection conn = new SqlConnection(con)) 
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("UPDATE users SET lastLogin=@lastLogin WHERE userName=@userName, userPass=@userPass", conn))
                    {
                        cmd.Parameters.AddWithValue("@lastLogin", DateTimeOffset.Now);
                        cmd.Parameters.AddWithValue("@userName", userName);
                        cmd.Parameters.AddWithValue("@userPass", pass);
                        return cmd.ExecuteNonQuery() == 1;
                    }
                }
                return false;
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
                                    id = (int)rd["product_id"],
                                    category = rd["product_category"].ToString(),
                                    subCategory = rd["product_sub_category"].ToString(),
                                    name = rd["product_name"].ToString(),
                                    description = rd["product_description"].ToString(),
                                    price = (decimal)rd["product_price"],
                                    imagePath = rd["product_image_path"].ToString()
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
