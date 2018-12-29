﻿using System;
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
    [Route("product")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
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
