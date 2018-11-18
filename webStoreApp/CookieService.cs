using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using webStoreApp.Model;

namespace webStoreApp
{
    public class CookieService
    {
        public static void SetCookie(User user)
        {
            ////var resp = new HttpResponseMessage();
            ////string token = UserService.GetToken(user).token;
            //var cookie = new CookieHeaderValue("Authorization", "Bearer " + user.token);
            //cookie.Expires = DateTimeOffset.Now.AddMinutes(30);
            //// cookie.Domain = Request
            //cookie.Path = "/";
            ////return cookie;
            //resp.Headers.AddCookies(new CookieHeaderValue[] { cookie });
            //return resp;
        }
    }
}
