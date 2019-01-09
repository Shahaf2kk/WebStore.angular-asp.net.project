using System.Collections.Generic;

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
        public List<newImage> imageArray { get; set; }
     

        public void splitImageToArray(string imagesString)
        {
            imageArray = new List<newImage>();
            string[] res = imagesString.Split(",");
            
            for (int i = 0; i < res.Length; i++)
            {
                string[] el = res[i].Split(" ");
                if (el[0] == "")
                {
                    imageArray.Add(new newImage() { url = el[1] });
                    continue;
                }

                imageArray.Add(new newImage() { url = res[i] });
            }
            imagePath = null;
        }
    }

    public class newImage
    {
        public string url { get; set; }
        public bool show = false;
    }
   
    public class productsCategoryNames
    {
        public string categoryNames { get; set; }
        public List<string> subCategoryNamesArray { get; set; }
    }
    public class productData
    {
        public List<productsCategoryNames> productsCateNames { get; set; }
        public List<productsNames> productsNames { get; set; }
        public List<product> topProducts { get; set; }
    }
 
    public class productsNames
    {
        public int id { get; set; }
        public string name { get; set; }
    }
    
}

