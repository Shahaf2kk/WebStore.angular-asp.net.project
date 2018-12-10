
// export class ShopService {

//     private productsCategoryNames: [{categoryNames: string, subCategoryNamesArray: string[] }];

//     constructor() { }

//     setCategoryName(cateName: any) {
//         this.productsCategoryNames = cateName;
//     }

//     getCategoryName() {
//         const categoriesNames = [];
//         this.productsCategoryNames.forEach(element => {
//             categoriesNames.push(element.categoryNames);
//         });
//         return categoriesNames;
//     }



//     private productsCategory: ProductList[];
//    // public productsSubcategory: ProductList[];
//    // public product: ProductList;
//     // public products: Observable<[{category: string, products: ProductList[]}]>;

//     // constructor(private serverService: ServerService) {
//     //     this.productsCategoryNames = this.serverService.getCategoriesNames();
//     // }
//     setProductCategory(product: ProductList[]) {
//         this.productsCategory = product;
//     }
//     // getCategoryName() {
//     //     const categoriesNames = [];
//     //     this.productsCategoryNames.forEach(element => {
//     //         categoriesNames.push(element.categoryNames);
//     //     });
//     //     return categoriesNames;
//     // }
//     // getProductByCategory(category: string) {
//     //     this.serverService.loadProductFromServerByCategory(category).then((data) => {
//     //         console.log(this.productsCategory);
//     //     });
//     //     return this.productsCategory;
//     // }
//     // getProductBySubCategory(category: string, subCategory: string) {
//     //     this.serverService.loadProductFromServerBySubCategory(category, subCategory)
//     //     .then((products: ProductList[]) => {
//     //         return products;
//     //     });
//     // }
//     // getProductById(id: number) {
//     //     this.serverService.loadProductFromServerById(id)
//     //     .then(product => {
//     //         return product;
//     //     });
//     // }
//     // getSubCategoryNames(category: string) {
//     //     for (let index = 0; index < this.productsCategoryNames.length; index++) {
//     //         if (this.productsCategoryNames[index].categoryNames === category) {
//     //             return this.productsCategoryNames[index].subCategoryNamesArray;
//     //         }
//     //     }
//     // }

//     // convertToArrayOfImage(products: ProductList[]) {
//     //     let imageProductArray = [];
//     //     for (let i = 0; i < products.length; i++) {
//     //         let counter = 0;
//     //         if (products[i].imagePath === null) {
//     //             products.splice(i, 1);
//     //             continue;
//     //         }
//     //         for (let j = 0; j < products[i].imagePath.length; j++) {
//     //             if (products[i].imagePath[j] === ',' || j === products[i].imagePath.length) {
//     //                 imageProductArray.push(products[i].imagePath.slice(counter, j));
//     //                 counter = j;
//     //             }
//     //         }
//     //         products[i].imagePath = imageProductArray;
//     //         imageProductArray = [];
//     //     }
//     //     return products;
//     // }
//     // getProductById(id: number) {
//     //         for (let index = 0; index < this.products.length; index++) {
//     //                 if (this.products[index].id === id) {
//     //             return this.products.slice()[index];
//     //         }
//     //     }
//     //     return null;
//     // }
//  }
