import { ProductList } from './shop.module';

export class ShopService {

    private products: ProductList[] = [
        new ProductList(1, 'electronics', 'watch', 'Casio Classic F91W-1 Wrist Watch for Men', 'The Casio F91W-1 wristwatch for men has been a popular digital model since its release in the early 1990s. The black resin band looks good with most daytime wear, and the digital accessories are useful and convenient. Made with study materials and using reliable quartz movement, this watch is perfect for men or women who value function and efficiency. This sporty chronograph watch features a 1/100 digital stopwatch that runs up to just shy of an hour. It is useful for athletes in training, coaches, and referees', 35.85, 'https://www.w3schools.com/howto/img_forest.jpg'),
        new ProductList(55, 'electronics', 'watch', 'Casio Classic F91W-1 Wrist Watch for Men', 'The Casio F91W-1 wristwatch for men has been a popular digital model since its release in the early 1990s. The black resin band looks good with most daytime wear, and the digital accessories are useful and convenient. Made with study materials and using reliable quartz movement, this watch is perfect for men or women who value function and efficiency. This sporty chronograph watch features a 1/100 digital stopwatch that runs up to just shy of an hour. It is useful for athletes in training, coaches, and referees', 35.85, 'https://www.w3schools.com/howto/img_forest.jpg'),
        new ProductList(66, 'electronics', 'watch', 'Casio Classic F91W-1 Wrist Watch for Men', 'The Casio F91W-1 wristwatch for men has been a popular digital model since its release in the early 1990s. The black resin band looks good with most daytime wear, and the digital accessories are useful and convenient. Made with study materials and using reliable quartz movement, this watch is perfect for men or women who value function and efficiency. This sporty chronograph watch features a 1/100 digital stopwatch that runs up to just shy of an hour. It is useful for athletes in training, coaches, and referees', 35.85, 'https://www.w3schools.com/howto/img_forest.jpg'),
        new ProductList(77, 'electronics', 'watch', 'Casio Classic F91W-1 Wrist Watch for Men', 'The Casio F91W-1 wristwatch for men has been a popular digital model since its release in the early 1990s. The black resin band looks good with most daytime wear, and the digital accessories are useful and convenient. Made with study materials and using reliable quartz movement, this watch is perfect for men or women who value function and efficiency. This sporty chronograph watch features a 1/100 digital stopwatch that runs up to just shy of an hour. It is useful for athletes in training, coaches, and referees', 35.85, 'https://www.w3schools.com/howto/img_forest.jpg'),
        new ProductList(88, 'electronics', 'watch', 'Casio Classic F91W-1 Wrist Watch for Men', 'The Casio F91W-1 wristwatch for men has been a popular digital model since its release in the early 1990s. The black resin band looks good with most daytime wear, and the digital accessories are useful and convenient. Made with study materials and using reliable quartz movement, this watch is perfect for men or women who value function and efficiency. This sporty chronograph watch features a 1/100 digital stopwatch that runs up to just shy of an hour. It is useful for athletes in training, coaches, and referees', 35.85, 'https://www.w3schools.com/howto/img_forest.jpg'),
        new ProductList(2, 'electronics', 'watch', 'Casio Classic F91W-1 Wrist Watch for Men', 'The Casio F91W-1 wristwatch for men has been a popular digital model since its release in the early 1990s. The black resin band looks good with most daytime wear, and the digital accessories are useful and convenient. Made with study materials and using reliable quartz movement, this watch is perfect for men or women who value function and efficiency. This sporty chronograph watch features a 1/100 digital stopwatch that runs up to just shy of an hour. It is useful for athletes in training, coaches, and referees', 35.85, 'https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/dqkAAOSw4A5Ytr9Q/$_35.JPG?set_id=89040003C1'),
        new ProductList(3, 'electronics', 'watch', 'Casio Classic F91W-1 Wrist Watch for Men', 'The Casio F91W-1 wristwatch for men has been a popular digital model since its release in the early 1990s. The black resin band looks good with most daytime wear, and the digital accessories are useful and convenient. Made with study materials and using reliable quartz movement, this watch is perfect for men or women who value function and efficiency. This sporty chronograph watch features a 1/100 digital stopwatch that runs up to just shy of an hour. It is useful for athletes in training, coaches, and referees', 35.85, 'https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/dqkAAOSw4A5Ytr9Q/$_35.JPG?set_id=89040003C1'),
        new ProductList(4, 'electronics', 'cameras', 'Nikon D3400 Digital SLR Camera 3 ', 'NIKON D3400 24MP DIGITAL SLR CAMERA + 18-55MM + 58MM TELEPHOTO & WIDE ANGLE LENS + FILTER KIT + 8GB MEMORY CARD + CARD WALLET + READER + GADGET BAG + LENS CAP HOLDER + CLEANINGKIT + MINI TRIPOD', 1543.55, 'https://ah.cwa.sellercloud.com/images/products/488070.jpg'),
        new ProductList(5, 'electronics', 'cameras', 'Nikon D3400 Digital SLR Camera 3 ', 'NIKON D3400 24MP DIGITAL SLR CAMERA + 18-55MM + 58MM TELEPHOTO & WIDE ANGLE LENS + FILTER KIT + 8GB MEMORY CARD + CARD WALLET + READER + GADGET BAG + LENS CAP HOLDER + CLEANINGKIT + MINI TRIPOD', 1544.55, 'https://ah.cwa.sellercloud.com/images/products/488070.jpg'),
        new ProductList(6, 'electronics', 'cameras', 'Nikon D3400 Digital SLR Camera 3 ', 'NIKON D3400 24MP DIGITAL SLR CAMERA + 18-55MM + 58MM TELEPHOTO & WIDE ANGLE LENS + FILTER KIT + 8GB MEMORY CARD + CARD WALLET + READER + GADGET BAG + LENS CAP HOLDER + CLEANINGKIT + MINI TRIPOD', 1545.55, 'https://ah.cwa.sellercloud.com/images/products/488070.jpg'),
        new ProductList(7, 'fashion', 'women', 'Women Evening Dress Convertible', 'You can wear it as halter dress, tube dress, spaghetti strap dress, off shoulder dress etc. This transformer maxi dress can be worn in more than 24 different ways, it is a good choice for you to be a designer and make you unique and fashionable.', 68.65, 'https://i.ebayimg.com/images/g/xKoAAOSw241YUQ1L/s-l1600.jpg'),
        new ProductList(8, 'fashion', 'women', 'Women Evening Dress Convertible', 'You can wear it as halter dress, tube dress, spaghetti strap dress, off shoulder dress etc. This transformer maxi dress can be worn in more than 24 different ways, it is a good choice for you to be a designer and make you unique and fashionable.', 68.65, 'https://i.ebayimg.com/images/g/xKoAAOSw241YUQ1L/s-l1600.jpg'),
        new ProductList(9, 'fashion', 'women', 'Women Evening Dress Convertible', 'You can wear it as halter dress, tube dress, spaghetti strap dress, off shoulder dress etc. This transformer maxi dress can be worn in more than 24 different ways, it is a good choice for you to be a designer and make you unique and fashionable.', 68.65, 'https://i.ebayimg.com/images/g/xKoAAOSw241YUQ1L/s-l1600.jpg'),
        new ProductList(10, 'fashion', 'men', '2017 New Fashin Men Slim Sports Short Sleeve', '2017 New Fashin Men Slim Sports Short Sleeve Casual Polo Shirt T-shirts Tops, 2017 New Fashin Men Slim Sports Short Sleeve Casual Polo Shirt T-shirts Tops , 2017 New Fashin Men Slim Sports Short Sleeve Casual Polo Shirt T-shirts Tops', 69.25, 'https://i.ebayimg.com/images/g/xp8AAOSwPcVVuzIa/s-l500.jpg'),
        new ProductList(11, 'fashion', 'men', '2017 New Fashin Men Slim Sports Short Sleeve', '2017 New Fashin Men Slim Sports Short Sleeve Casual Polo Shirt T-shirts Tops, 2017 New Fashin Men Slim Sports Short Sleeve Casual Polo Shirt T-shirts Tops , 2017 New Fashin Men Slim Sports Short Sleeve Casual Polo Shirt T-shirts Tops', 69.25, 'https://i.ebayimg.com/images/g/xp8AAOSwPcVVuzIa/s-l500.jpg'),
        new ProductList(12, 'fashion', 'men', '2017 New Fashin Men Slim Sports Short Sleeve', '2017 New Fashin Men Slim Sports Short Sleeve Casual Polo Shirt T-shirts Tops, 2017 New Fashin Men Slim Sports Short Sleeve Casual Polo Shirt T-shirts Tops , 2017 New Fashin Men Slim Sports Short Sleeve Casual Polo Shirt T-shirts Tops', 69.25, 'https://i.ebayimg.com/images/g/xp8AAOSwPcVVuzIa/s-l500.jpg'),
        new ProductList(13, 'motors', 'car', '1956 Chevrolet Bel Air/150/210', 'This is a 1956 Chevrolet Bel Air 2 Door Sedan that has been completely renovated (Frame Off Restoration) and customized to represent the very best an American Classic can be. The car has 184 miles on it since the completion of its restoration and is finished in a beautiful 3 Stage Paint job in two-tone Root Beer and White, complemented by a Root Beer and White vinyl interior. The paint, the chrome, the engine compartment and the interior are all near perfect.', 800.68, 'https://i.ebayimg.com/images/g/kAAAAOSw5S9bkJC~/s-l500.jpg'),
        new ProductList(14, 'motors', 'car', '1956 Chevrolet Bel Air/150/210', 'This is a 1956 Chevrolet Bel Air 2 Door Sedan that has been completely renovated (Frame Off Restoration) and customized to represent the very best an American Classic can be. The car has 184 miles on it since the completion of its restoration and is finished in a beautiful 3 Stage Paint job in two-tone Root Beer and White, complemented by a Root Beer and White vinyl interior. The paint, the chrome, the engine compartment and the interior are all near perfect.', 800.68, 'https://i.ebayimg.com/images/g/kAAAAOSw5S9bkJC~/s-l500.jpg'),
        new ProductList(15, 'motors', 'car', '1956 Chevrolet Bel Air/150/210', 'This is a 1956 Chevrolet Bel Air 2 Door Sedan that has been completely renovated (Frame Off Restoration) and customized to represent the very best an American Classic can be. The car has 184 miles on it since the completion of its restoration and is finished in a beautiful 3 Stage Paint job in two-tone Root Beer and White, complemented by a Root Beer and White vinyl interior. The paint, the chrome, the engine compartment and the interior are all near perfect.', 800.68, 'https://i.ebayimg.com/images/g/kAAAAOSw5S9bkJC~/s-l500.jpg'),
        new ProductList(18, 'motors', 'motorcycle', '1976 Honda CB750 four', '1976 cb750 Four Fresh powder coat all over Fresh paint by (Nascar Team Painter) All new factory Honda emblems and switches cb550 front forks (1 1/2 lower tubes) Clip on bars (bolted to forks) Multiple (Joker parts)  4 inch extended swing arm (have factory arm as well) Nitrogen filled adjustable rear shocks- Front rim is 19inch with vintage Firestone tire  Rear rim is 16inch Harley rim laced with cb hub (hard to come by) with vintage Firestone tire $350 extended drag chain $300 drag battery which is light weight and holds a charge for years Dyna Digital ignition system with duel crank sensors for accurate timing, adjustable rev. limiter up to 12,500 rpm, 4 timing advance and 5 retard settings, 2 digital outputs for digital dash, NOS solenoid, or wide band o2 system (dont have). With the daytona Wego IV wide band which has a digital input and data logger gives the bike ability to log timing curve and air fuel ratio on a graph right on a laptop on a 76 motorcycle, awesome right! (02 bung already welded in header) Fresh carb rebuild with bigger jets Royal purple fluids Also comes with tons of spare parts and an enclosed trailer ', 1488.2, 'https://i.ebayimg.com/images/g/kAAAAOSw5S9bkJC~/s-l500.jpg')
    ];
    getCategoryName() {
        const categoriesNames: string[] = [this.products[0].category];
        for (let i = 1; i < this.products.length; i++) {
            for (let j = 0; j < categoriesNames.length; j++) {
                if (categoriesNames[j] === this.products[i].category) {
                    break;
                } else if ( j === categoriesNames.length - 1 ) {
                    categoriesNames.push(this.products[i].category);
                } else {
                    continue;
                }
            }
        }
        return categoriesNames;
    }
    getProductById(id: number) {
        for (let index = 0; index < this.products.length; index++) {
            if (this.products[index].id === id) {
                return this.products.slice()[index];
            }
        }
        return null;
    }
    getProductByCategory(category: string ) {
        const product: ProductList[] = [];
        for (let index = 0; index < this.products.length; index++) {
            if (this.products[index].category === category) {
                product.push(this.products[index]);
            }
        }
        return product;
    }
    getProductBySubCategory(category: string, subCategory: string) {
        const categoryProduct: ProductList[] = this.getProductByCategory(category);
        const SubCategoryProduct: ProductList[] = [];
        for (let index = 0; index < categoryProduct.length; index++) {
            if (categoryProduct[index].subCategory === subCategory) {
                SubCategoryProduct.push(categoryProduct[index]);
            }
        }
        return SubCategoryProduct;
    }

    getSubCategoryNames(category: string) {
        const subCategoryList: string[] = [];
        for (let index = 0; index < this.products.length; index++) {
            if (this.products[index].category === category ) {
                const subCategoryName = this.products[index].subCategory;
                let exist = false;
                for (let i = 0; i < subCategoryList.length; i++) {
                    if (subCategoryList[i] === subCategoryName) {
                        exist = true;
                        break;
                    }
                }
                if (!exist) {
                    subCategoryList.push(subCategoryName);
                }
            }
        }
        return subCategoryList;
    }
}
