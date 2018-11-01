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
    [Route("users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        [HttpPost]
        public IActionResult GetToken(string u, string p)
        {
            if (string.IsNullOrEmpty(u) || string.IsNullOrEmpty(p))
                return new BadRequestObjectResult("user name or passwornd are empty");
            User user = new User
            {
                userName = u,
                pass = p,
                token = null
            };
            user = DB.Users.SignIn(user);
            if (user != null)
                return new OkObjectResult(UserService.UserAuthenticate(user).token);

            return new NotFoundObjectResult("Username or Password are wrong");
        }

        [HttpGet]
        public IActionResult SignUp(string u, string p, string e)
        {
            if (string.IsNullOrEmpty(u) || string.IsNullOrEmpty(p) || string.IsNullOrEmpty(e))
                return new BadRequestObjectResult("username, password or email are empty");

            User user = new User
            {
                userName = u,
                pass = p,
                email = e
            };

            return DB.Users.SignUp(user);
        }

    }
}