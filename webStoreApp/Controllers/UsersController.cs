using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webStoreApp.Model;

namespace webStoreApp.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        [HttpGet("signin")]
        public IActionResult SignIn(string username, string pass)
        {
            string userName = User.Identity.Name;
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(pass))
                return new NotFoundObjectResult("user name or passwornd are empty");
            User user = new User
            {
                userName = username,
                pass = pass,
                token = null
            };
            user = DB.Users.SignIn(user);
            if (user != null)
                return new OkObjectResult(UserService.GetToken(user).token);

            return new BadRequestObjectResult("Username or Password are wrong");
        }

        [HttpPost("signup")]
        public IActionResult SignUp(string username,string pass, string email)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(pass) || string.IsNullOrEmpty(email))
                return new NotFoundObjectResult("username, password or email are empty");

            User user;
            user = DB.Users.SignUp(new User { userName = username, pass = pass, email = email });
            if (user == null)
                return new BadRequestObjectResult("username or email is taken, please select others");
            return new OkObjectResult(user);
        }
    }

}