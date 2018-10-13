import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../../product/models/product.model';

@Pipe({
  name: 'orderByPipe'
})
export class OrderByPipePipe implements PipeTransform {

  transform(products: Array<[Product, number]>, sortType: SortType, descOrder: boolean): Array<[Product, number]> {
    const koef = descOrder ? -1 : 1;
    let sortedFunc;
    switch (sortType) {
      case 'amount':
        sortedFunc = (p1, p2) => koef * (p1[1] - p2[1]);
        break;
      case 'price':
        sortedFunc = (p1, p2) => koef * (p1[0].price - p2[0].price);
        break;
      case 'name':
        sortedFunc = (p1, p2) => koef * (this.sortedTwoStringsFunc(p1[0].name, p2[0].name));
        break;
      default:
        sortedFunc = () => 0;
    }
    return products.sort(sortedFunc);
  }

  private sortedTwoStringsFunc(str1: string, str2: string): number {
    const length = Math.min(str1.length, str2.length);
    for (let i = 0; i < length; i++) {
      const diffCode = str1.charCodeAt(i) - str2.charCodeAt(i);
      if (diffCode !== 0) {
        return diffCode;
      }
    }
    return str1.length - str2.length;
  }
}

export type SortType = 'price' | 'amount' | 'name';
