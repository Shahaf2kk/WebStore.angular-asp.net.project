using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webStoreApp.Model;

namespace webStoreApp.Controllers
{
    //[Authorize]
    [Route("product")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public List<product> GetProduct()
        {
            return DB.Products.GetProducts(); 
        }
    }
}