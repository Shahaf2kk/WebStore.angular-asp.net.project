using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webStoreApp.Model
{
    public class UserData
    {
        public string userName { get; set; }
        public List<Cart> cartDetails { get; set; }
    }
}
