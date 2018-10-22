using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace webStoreApp.Model
{
    public class User
    {
        public string userName { get; set; }
        public string pass { get; set; }
        public string email { get; set; }
        public string token { get; set; }
    }
}
