using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webStoreApp.Model
{
    public class Cart
    {
        public product productDetails { get; set; }
        //public int productId { get; set; }
        //public string productName { get; set; }
        public int qty { get; set; }
        //public decimal productPrice { get; set; }
        public decimal totalCost { get; set; }
    }
}
