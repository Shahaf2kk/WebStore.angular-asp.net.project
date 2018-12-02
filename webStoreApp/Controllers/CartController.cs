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
        [HttpPost]
        public IActionResult PostCartProduct(int? productId, int? qty)
        {
            string userName = User.Identity.Name;
            if (productId == null || productId == 0 || qty == null || qty == 0)
                return new NotFoundResult();
            Cart cart = new Cart { productDetails = new product { id = (int)productId }, qty = (int)qty };
            return DB.CartShop.AddOrUpdateCartProduct(userName, (int)productId, (int)qty);
        }
    }
}
