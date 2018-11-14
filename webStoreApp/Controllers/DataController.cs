using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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

        }
    }
}