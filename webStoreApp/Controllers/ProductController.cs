using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webStoreApp.Model;

namespace webStoreApp.Controllers
{
    [Route("product/names")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetCategoryNames()
        {
            return DB.Products.GetProductsCate();
        }
    
    }

    [Route("product/cate")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProductByCategory(string category)
        {
            if (string.IsNullOrEmpty(category))
                return NotFound();
            return DB.Products.GetProductsByCate(category);


        }
    }

}
