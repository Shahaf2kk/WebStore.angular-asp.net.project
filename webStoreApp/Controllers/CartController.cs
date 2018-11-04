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
    [Authorize]
    [Route("cart")]
    [ApiController]
    public class CartController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetCartProduct()
        {
            string userName = User.Identity.Name;
            if (string.IsNullOrEmpty(userName))
                return new NotFoundResult();
            return DB.CartShop.getCartProduct(userName);
        }
        [HttpPost]
        public IActionResult PostCartProduct([FromQuery] int? productId, int? qty)
        {
            string userName = User.Identity.Name;
            if (string.IsNullOrEmpty(userName))
                return new NotFoundResult();
            if (productId == null || productId == 0 || qty == null || qty == 0)
                return new NotFoundResult();
            Cart cart = new Cart { productId = (int)productId, qty = (int)qty };
            return DB.CartShop.setCartProduct(cart , userName);
        }
    }
}
