using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webStoreApp.Model
{
    public class product
    {
        public int id { get; set; }
        public string category { get; set; }
        public string subCategory { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public decimal price { get; set; }
        public string imagePath { get; set; }
      
        //product(int id, string category, string subCategory, string name, string description, float price, string imagePath)
        //{
        //    this.id = id;
        //    this.category = category;
        //    this.subCategory = subCategory;
        //    this.name = name;
        //    this.description = description;
        //    this.price = price;
        //    this.imagePath = imagePath;
        //}
    }
}
