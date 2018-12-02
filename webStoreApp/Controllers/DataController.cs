using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Web.Http;
using System.Net.Http.Headers;
using System.Net;
using System.Net.Http;
using static System.Net.Http.HttpResponseHeadersExtensions;
using webStoreApp.Model;

namespace webStoreApp.Controllers
{
    [Authorize]
    [Route("data")]
    [ApiController]
    public class DataController : ControllerBase
    {
        [HttpGet]
        public IActionResult getUserData()
        {
            string username = User.Identity.Name;
            if (string.IsNullOrEmpty(username))
                return new BadRequestResult();
            return DB.GetUserData.GetUserSigninData(username);
        }
        [HttpGet("cart")]
        public IActionResult GetCartProduct()
        {
            UserData user = new UserData { userName = User.Identity.Name };
            if (string.IsNullOrEmpty(user.userName))
                return new NotFoundResult();
            return DB.GetUserData.getUserCartProduct(user);
        }
    }
}