import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baughtProducts: Array<Product> = new Array();

  constructor() { }

  addBaughtProduct(product: Product): Array<Product> {
    if (this.baughtProducts.filter(p => p.id === product.id).length === 0) {
      this.baughtProducts.push(product);
    }
    return this.baughtProducts;
  }

  removeProduct(product: Product): Array<Product> {
    product.isAvailable = true;
    this.baughtProducts = this.baughtProducts.filter(p => p.id !== product.id);
    return this.baughtProducts;
  }

  getBaughtProducts(): Array<Product> {
    return this.baughtProducts;
  }

  isEmpty(): boolean {
    return this.baughtProducts.length === 0;
  }
}
