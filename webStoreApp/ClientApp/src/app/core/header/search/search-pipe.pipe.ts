import { Pipe, PipeTransform } from '@angular/core';

import { ProductsName } from '../../../model/product.model';

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

    const res = items.filter( e => {
      const filterRes = e.name.toLowerCase().includes(searchInput);
        return filterRes;
    });
    return res;
  }

}
