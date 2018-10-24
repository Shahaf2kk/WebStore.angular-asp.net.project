using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using webStoreApp.Model;
namespace webStoreApp
{
    public class UserService
    {
        public static string appSetting; //"tfdxdrtg636278534utheiuv776g76g7g67yu9iiuiuytreww34567890iuytfghjkjhgfdfghjiuyt5t6y7u8ioi9o9ikjuyhbgfrdcdswsxsaqq12w23e34r45rt";

        public static User UserAuthenticate(User user)
        {
            if(string.IsNullOrEmpty(user.userName))
            {
                user = null;
                return user;
            }
                return TokenAuthenticate(user);
        }
        private static User TokenAuthenticate(User user)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, user.userName)
            };
        
                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(appSetting));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "http://localhost:64565",
                    audience: "http://localhost:64565",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(45),
                    signingCredentials: creds
                    );
                user.token = new JwtSecurityTokenHandler().WriteToken(token);
                user.pass = null;
                return user;
        }
    }
}
