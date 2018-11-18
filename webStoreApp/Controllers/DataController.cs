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
            string user = User.Identity.Name;
            if (string.IsNullOrEmpty(user))
                return new BadRequestResult();
            return DB.GetUserData.getUserData(user);
        }
    }
}