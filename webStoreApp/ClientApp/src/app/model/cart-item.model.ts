import { Product } from './product.model';

export class CartItem {
    public productDetails: Product;
    public qty: number = null;
    public totalCost: number = null; // = (this.productDetails.price) * this.qty;
    public selected = false;
}


// public id: number;
// public category: string;
// public subCategory: string;
// public name: string;
// public description: string;
// public price: number;
// public imagePath: string;


// productDetails:
// category: "Automotive"
// description: "Key Features of ManeKo 1 Mobile Holder, 1 Anti Slip Mat Combo Universal Mobile Mount Flexible Bending Neck Extra Strength Suction NON SLIP MAT - Universal Product Made of Silicone Long Lasting Product,ManeKo 1 Mobile Holder, 1 Anti Slip Mat Combo Price: Rs. 435 Unique Design To Fit Most Smartphones, Allows Tight Grip Into Cd Slot. Inserts Into Front Loading Cd Player Slot With The Best Viewing Angle, To Allow For Controls Accessible By The Driver. The Non-Damage Installation Without Suction Cups, Clips, Screws, Adhesives Or Glue Etc. Allows For Cd Operation When Installed. 360 Degree Adjustable Angle For The Best View. This Nonslip Mat is good for placing mobile phone, sunglasses, MP3, wallet, keys, etc It prevents item kept on dashboard from falling /sliding. This anti-slip mat grips your devices to your car dashboard. Not any kind of adhesive/tape is required. It is re-usable and can be washed when it gets dirty.,Specifications of ManeKo 1 Mobile Holder, 1 Anti Slip Mat Combo General Brand ManeKo Primary Product Type Car Mobile Holder Vehicle Model Name Universal Model Number Racer Car Mount 360 Degree Bending Neck Universal Car Mobile Holder & Anti Slip Mat For Car Dashboard Vehicle Brand Universal Product Secondary Product Type Anti Slip Mat Features Mobile Holder is suitable for all the smartphones/GPS etc. Non Slip Mat is suitable for all the Dashboard Items (Mobile Phones, Car Keys, MP3 Player, Wallet, Sun Glasses etc.) Warranty Covered in Warranty No In the Box 1 Mobile Holder, 1 Anti Slip Mat"
// id: 147852702
// imagePath: "http://img6a.flixcart.com/image/automotive-combo/s/u/k/racer-car-mount-360-degree-bending-neck-universal-car-mobile-original-imaejftvdagyhx7k.jpeg, http://img6a.flixcart.com/image/automotive-combo/w/k/r/black-one-touch-universal-car-mobile-holder-anti-slip-mat-for-original-imaeav9pb6kwyejr.jpeg, http://img5a.flixcart.com/image/automotive-combo/s/u/k/racer-car-mount-360-degree-bending-neck-universal-car-mobile-original-imaehpy4wdzy4xgk.jpeg, http://img6a.flixcart.com/image/automotive-combo/s/u/k/racer-car-mount-360-degree-bending-neck-universal-car-mobile-original-imaehpy5zj4zqsxw.jpeg, http://img5a.flixcart.com/image/automotive-combo/s/u/k/racer-car-mount-360-degree-bending-neck-universal-car-mobile-original-imaehpy5fkhwz9zz.jpeg"
// name: "ManeKo 1 Mobile Holder, 1 Anti Slip Mat Combo"
// price: 799
// subCategory: "Accessories & Spare parts"
// __proto__: Object
// qty: 16
// totalCost: 12784
