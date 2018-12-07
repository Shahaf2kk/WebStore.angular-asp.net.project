import { ShipDetails } from './ship-details.model';

export class Order {
    public shipDetails: ShipDetails;
    public productsId: number[];
    public productsQty: number[];
}
// postOrder(order: Order) {
//     const body =  JSON.stringify(order);
//     console.log(body);
//     this.http.post(this.baseUrl + 'order', { body },
//      { headers: this.authService.getHeaders()
//         .set('Content-Type', 'application/json'),
//         responseType: 'json', observe: 'response' })
//      .subscribe(
//         data => {
//         console.log(data);
//         },
//         error => console.log(error));
// }
