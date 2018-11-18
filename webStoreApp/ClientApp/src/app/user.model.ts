export class User {
    public userName: string;
    public pass: string;
    public email: string;
    public token: string;
    public listOfCart: [{ productId: Number, qty: number }];
    // public listOfCart: Array<{productId: Number, qty: number}>;
}
