import { Injectable } from '@angular/core';
import { ProductList } from './shop.module';
import { ServerService } from '../server.service';

@Injectable()
export class ShopService {
    private productsCategoryNames: [{categoryNames: string, subCategoryNamesArray: string[] }];
    private products: [{category: string, products: ProductList[]}] = null;

    constructor(private serverService: ServerService) {
        this.productsCategoryNames = this.serverService.getCategoriesNames();
        console.log(this.productsCategoryNames);
        this.test();
    }
    test() {
        console.log('first time');
        console.log(this.products);
        for (let index = 0; index < this.productsCategoryNames.length; index++) {
            this.getProductByCategory(this.productsCategoryNames[index].categoryNames.toString());
            console.log(index + ' time');
            console.log(this.products);
        }
    }
    getCategoryName() {
        const categoriesNames = [];
        this.productsCategoryNames.forEach(element => {
            categoriesNames.push(element.categoryNames);
        });
        return categoriesNames;
    }
    getProductByCategory(category: string) {
        if (this.products !== null) {
            for (let index = 0; index < this.products.length; index++) {
                if (this.products[index].category === category) {
                    return this.products[index].products;
                }
            }
        }
        this.serverService.loadProductFromServer(category).then((product: ProductList[]) => {
            product = this.convertToArrayOfImage(product);
            this.products.push( { category: category, products: product } );
            return product;
        });
    }
    // getProductBySubCategory(category: string, subCategory: string) {
    //     const categoryProduct: ProductList[] = this.getProductByCategory(category);
    //     const SubCategoryProduct: ProductList[] = [];
    //     for (let index = 0; index < categoryProduct.length; index++) {
    //         if (categoryProduct[index].subCategory === subCategory) {
    //             SubCategoryProduct.push(categoryProduct[index]);
    //         }
    //     }
    //     return SubCategoryProduct;
    // }
    getSubCategoryNames(category: string) {
        for (let index = 0; index < this.productsCategoryNames.length; index++) {
            if (this.productsCategoryNames[index].categoryNames === category) {
                return this.productsCategoryNames[index].subCategoryNamesArray;
            }
        }
    }
    convertToArrayOfImage(products: ProductList[]) {
        let imageProductArray = [];
        for (let i = 0; i < products.length; i++) {
            let counter = 0;
            if (products[i].imagePath === null) {
                products.splice(i, 1);
                continue;
            }
            for (let j = 0; j < products[i].imagePath.length; j++) {
                if (products[i].imagePath[j] === ',' || j === products[i].imagePath.length) {
                    imageProductArray.push(products[i].imagePath.slice(counter, j));
                    counter = j;
                }
            }
            products[i].imagePath = imageProductArray;
            imageProductArray = [];
        }
        return products;
    }
    // getProductById(id: number) {
        //     for (let index = 0; index < this.products.length; index++) {
            //         if (this.products[index].id === id) {
    //             return this.products.slice()[index];
    //         }
    //     }
    //     return null;
    // }
}
