export class Product {
    id: number = null;
    category: string = null;
    subCategory: string = null;
    name: string = null;
    description: string = null;
    price: number = null;
    imagePath: string = null;
    imageArray: ImageArray[];
}

export class ProductsName {
    public id: number;
    public name: string;
}

export class ImageArray {
    public url: string = null;
    public show: boolean = null;
}
