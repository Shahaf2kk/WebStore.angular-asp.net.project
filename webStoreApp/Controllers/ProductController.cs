using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace webStoreApp.Controllers
{
    [Route("api/product")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        [HttpPost("search")]
        public IActionResult GetProductsByArrayOfProductsId([FromBody] JObject data)
        {
            int[] products = data["products"].ToObject<int[]>();
            if (products.Length > 0)
                return DB.Products.GetProductsSearch(products);
            return new BadRequestResult();
        }

        [HttpGet("names")]
        public IActionResult GetStartUpData()
        {
            return DB.Products.GetStartUpData();
        }

        [HttpGet("category")]
        public IActionResult GetProductByCategory(string category, string subCategory)
        {
            if (string.IsNullOrEmpty(category) || string.IsNullOrEmpty(category) && string.IsNullOrEmpty(subCategory))
                return BadRequest();

            if (string.IsNullOrEmpty(subCategory))
                return DB.Products.GetProductsByCate(category);

            return DB.Products.GetProductsBySubCat(category, subCategory);
        }


        [HttpGet("id")]
        public IActionResult GetProductById(int? id)
        {
            if (id == null || id == 0)
                return BadRequest();

            return DB.Products.GetProductsById((int)id);
        }
    }
}
