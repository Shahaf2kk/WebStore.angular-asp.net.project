import { ShipDetails } from './ship-details.model';
import { Product } from './product.model';

export class Order {
    public shipDetails: ShipDetails;
    public productsId: number[] = [];
    public productsQty: number[] = [];
}

export class OrderDetails {
    public products: Product[];
    public productsQty: number[];
    public shipDetails: ShipDetails;
    public totalCost: number;
}
