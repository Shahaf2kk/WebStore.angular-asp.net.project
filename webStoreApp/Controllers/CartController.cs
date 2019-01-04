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
    [Route("api/cart")]
    [ApiController]
    public class CartController : ControllerBase
    {
        [HttpPost]
        public IActionResult PostCartProduct(int? productId, int? qty, bool? updateLow)
        {
            bool lower = updateLow == true ? true : false;
            if (productId == null || productId == 0 || qty == null || qty == 0)
                return new NotFoundResult();
            string userName = User.Identity.Name;
            Cart cart = new Cart { productDetails = new product { id = (int)productId }, qty = (int)qty };
            return DB.CartShop.AddOrUpdateCartProduct(userName, (int)productId, (int)qty, lower);
        }
        [HttpGet]
        public IActionResult DeleteCartProduct(int? productId)
        {
            if (productId == null)
                return new NotFoundResult();
            string userName = User.Identity.Name;
            List<int> id = new List<int>();
            id.Add((int)productId);
            return DB.CartShop.DeleteCartProduct(null, id, userName);

        }
    }
}
