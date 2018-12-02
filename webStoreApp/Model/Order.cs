using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webStoreApp.Model
{
    public class Order
    {
        public List<product> products { get; set; }
        public int[] productsQty { get; set; }
        public ShipDetails shipDetails { get; set; }
        public decimal totalCost { get; set; }

        public void SetProductsId(int[] _products)
        {
            products = new List<product>();
            for (int i = 0; i < _products.Length; i++)
            {
                products.Add(new product { id = _products[i] });
            }
        }

    }


    public class ShipDetails
    {
        public string shipAddress { get; set; }
        public string shipCity { get; set; }
        public string shipCountry { get; set; }
        public string phone { get; set; }
    }
}
