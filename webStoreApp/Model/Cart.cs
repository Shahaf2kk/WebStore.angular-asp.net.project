using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webStoreApp.Model
{
    public class Cart
    {
        public int cart_id { get; set; }
        public product productDetails { get; set; }
        public int qty { get; set; }
        public decimal totalCost { get; set; }
    }
}
