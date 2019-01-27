using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using webStoreApp.Model;
namespace webStoreApp
{
    public class UserService
    {
        private static string appSetting; 

        public static void SetAppSetting(string value)
        {
            appSetting = value;
        }

        public static User GetToken(User user)
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
                new Claim(ClaimTypes.Name, user.userName),
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

        public static string SetHashPassword(string pass)
        {
            return GetHash(pass);
        }

        public static bool VerifyHash(string hash, string pass)
        {
            string passHash = GetHash(pass);
            StringComparer coperer = StringComparer.OrdinalIgnoreCase;
            return coperer.Compare(passHash, hash) == 0;
        }

        private static string GetHash(string data)
        {
            using (SHA256 sha256Alg = SHA256.Create())
            {
                byte[] hashByte = sha256Alg.ComputeHash(Encoding.UTF8.GetBytes(data));
                StringBuilder res = new StringBuilder();
                for (int i = 0; i < hashByte.Length; i++)
                {
                    res.Append(hashByte[i].ToString("x2"));
                }
                return res.ToString();
            }
        }

    }
}

