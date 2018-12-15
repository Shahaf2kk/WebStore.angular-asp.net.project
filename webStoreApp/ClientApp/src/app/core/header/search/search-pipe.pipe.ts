import { Pipe, PipeTransform } from '@angular/core';
import { ProductsName } from 'src/app/model/product.model';

@Pipe({
  name: 'searchProduct'
})
export class SearchPipePipe implements PipeTransform {

  transform(items: ProductsName[], searchInput: any): any[] {
    if (!items ) {
      return [];
    }
    if (!searchInput || searchInput === '') {
      return [];
    }

    searchInput = searchInput.toLowerCase();

    return items.filter( e => {
        return e.name.toLowerCase().includes(searchInput);
    });
  }

}
