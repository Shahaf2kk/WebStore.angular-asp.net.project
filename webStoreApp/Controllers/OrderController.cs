using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using webStoreApp.Model;

namespace webStoreApp.Controllers
{
    [Authorize]
    [Route("api/order")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        [HttpPost]
        public IActionResult SetOrder([FromBody] JObject _data)
        {
            var data = _data["order"].ToObject<JObject>();
            Order order = new Order();
            order.shipDetails = data["shipDetails"].ToObject<ShipDetails>();
            order.SetProductsId(data["productsId"].ToObject<int[]>());
            order.productsQty = data["productsQty"].ToObject<int[]>();

            if (order.shipDetails == null || order.products == null || order.productsQty == null || order.products.Count != order.productsQty.Length)
                return new NotFoundResult();

            string username = User.Identity.Name;
            List<int> a = new List<int>();
            for (int i = 0; i < order.products.Count; i++)
            {
                a.Add(order.products[i].id);
            }
            return DB.Orders.SetOrder(username, order);
        }
        [HttpGet("pay")]
        public IActionResult PayOrder()
        {
            string username = User.Identity.Name;

            return DB.Orders.PayOrder(username);
        }


    }
}