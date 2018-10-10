 export class ProductList {
    public id: number;
    public category: string;
    public subCategory: string;
    public name: string;
    public description: string;
    public price: number;
    public imagePath: string;
    constructor(id: number, category: string, subCategory: string, name: string, description: string, price: number, imagePath: string) {
        this.id = id;
        this.category = category;
        this.subCategory = subCategory;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imagePath = imagePath;
    }
}
