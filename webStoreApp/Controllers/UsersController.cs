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
    [Route("users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        // public DateTimeOffset? DataTimeOfSet { get; private set; }

        [HttpPost]
        public IActionResult SignIn(string u, string p)
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
                return new OkObjectResult(UserService.GetToken(user).token);

            return new NotFoundObjectResult("Username or Password are wrong");
        }

        [HttpGet]
        public IActionResult SignUp(string u, string p, string e)
        {
            if (string.IsNullOrEmpty(u) || string.IsNullOrEmpty(p) || string.IsNullOrEmpty(e))
                return new BadRequestObjectResult("username, password or email are empty");

            User user;
            user = DB.Users.SignUp(new User { userName = u, pass = p, email = e });
            if (user == null)
                return new BadRequestResult();
            return new OkObjectResult(user);
        }
        //public HttpResponseMessage SignUp(string u, string p, string e)
        //{
        //    HttpResponseMessage res = new HttpResponseMessage();

        //    if (string.IsNullOrEmpty(u) || string.IsNullOrEmpty(p) || string.IsNullOrEmpty(e))
        //        return new HttpResponseMessage().HttpStatusCode(404);
        //    //return new BadRequestObjectResult("username, password or email are empty");

        //    User user = new User
        //    {
        //        userName = u,
        //        pass = p,
        //        email = e
        //    };
        //    user = DB.Users.SignUp(user);
        //    //if (user == null)
        //    //    return NotFound();

        //    string value = user.token;
        //    var key = "Authorization";
        //    var cookie = new CookieHeaderValue(key, value);
        //    cookie.Expires = DateTime.Now.AddMinutes(30);
        //    //CookieOptions options = new CookieOptions();
        //    //options.Expires = DateTime.Now.AddMinutes(30);

        //    //Response.Cookies.Append(key, value, options);
        //    //var keys = Request.Cookies.Keys;
        //    var res = new HttpResponseMessage();
        //    res.Headers.AddCookies(new CookieHeaderValue[] { cookie });
        //    //res.RequestMessage = key.ToString();
        //    return res;
        //    //return res.Headers.AddCookies()

        //    //return new OkObjectResult(keys);
        //    //if (user == null)
        //    //    return new BadRequestResult();
        //    //var cookie = new CookieHeaderValue("Authorization", user.token.ToString());
        //    //cookie.Expires = DateTime.Now.AddMinutes(30);
        //    //cookie.Domain = "domain";
        //    //cookie.Path = "";
        //    //var h = new HttpResponseMessage().Headers.AddCookies(new CookieHeaderValue[] { cookie });
        //    //return new HttpResponseMessage().Headers.AddCookies(new CookieHeaderValue[] { cookie });
        //    //return new OkObjectResult(user);
        //    //return DB.Users.SignUp(user);
        ////}

    }

}