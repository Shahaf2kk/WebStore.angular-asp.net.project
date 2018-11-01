using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace webStoreApp.Controllers
{
    [Authorize]
    [Route("cart")]
    [ApiController]
    public class CartController : ControllerBase
    {
        [HttpGet]
        public IActionResult CartProduct()
        {
            string userName = User.Identity.Name;
            if (string.IsNullOrEmpty(userName))
                return new NotFoundResult();
            return DB.CartShop.getCartProduct(userName);
        }
    }
}