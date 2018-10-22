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
    [Route("users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        [HttpPost]
        public string users(User user)
        {
            if(string.IsNullOrEmpty(user.userName) || string.IsNullOrEmpty(user.pass))
                return "user name and passwornd empty";
            if (DB.users.SingIn(user.userName, user.pass))
                return UserService.UserAuthenticate(user).token;
            return null;
        }
    }
}