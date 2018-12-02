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
    }
   
    public class productsCategoryNames
    {
        public string categoryNames { get; set; }
        public List<string> subCategoryNamesArray { get; set; }
    }
}
