import { CartItem } from './cart-item.model';

export class User {
    public userName: string;
    public pass: string;
    public email: string;
    public token: string;
    public listOfCart: CartItem[];
}
