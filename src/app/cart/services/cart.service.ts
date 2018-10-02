import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { isNullOrUndefined } from 'util';
import { Order } from '../../order/model/order.model';
import { OrderServise } from '../../order/services/order.service';
import { Product } from '../../product/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baughtProducts: Array<[Product, number]> = new Array();
  private baughtProductsSubject = new Subject<Array<[Product, number]>>();
  private baughtProductsObserver$ = this.baughtProductsSubject.asObservable();

  constructor(private orderServise: OrderServise) { }

  getBaughtProductsObserver(): Observable<Array<[Product, number]>> {
    return this.baughtProductsObserver$;
  }

  getBaughtProducts():  Array<[Product, number]> {
    return this.baughtProducts;
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    this.baughtProducts.forEach(p => totalPrice += p['0'].price * p['1']);
    return totalPrice;
  }

  getTotalAmount(): number {
    let totalAmount = 0;
    this.baughtProducts.forEach(p => totalAmount += p['1']);
    return totalAmount;
  }

  isEmpty(): boolean {
    return this.baughtProducts.length === 0;
  }

  addProduct(product: Product): void {
    const findedProduct = this.findProducAndAmount(product);
    if (isNullOrUndefined(findedProduct) && product.amount > 0) {
      this.baughtProducts.push([product, 1]);
      this.baughtProductsSubject.next(this.baughtProducts);
    }
  }

  addProductItem(product: Product) {
    const findedProduct =  this.findProducAndAmount(product);
    if (findedProduct && product.amount > findedProduct['1']) {
      findedProduct['1']++;
      this.baughtProductsSubject.next(this.baughtProducts);
    }
  }

  removeProduct(product: Product) {
    this.baughtProducts = this.baughtProducts.filter(p =>  p['0'] !== product);
    product.choosen = false;
    this.baughtProductsSubject.next(this.baughtProducts);
  }

  removeProductItem(product: Product) {
    const findedProduct =  this.findProducAndAmount(product);
    if (findedProduct && findedProduct['1'] > 0) {
      findedProduct['1']--;
      this.baughtProductsSubject.next(this.baughtProducts);
    }
  }

  buyProdusts() {
    const order = new Order(this.baughtProducts);
    this.orderServise.completeOrder(order);
    this.baughtProducts = [];
    this.baughtProductsSubject.next(this.baughtProducts);
  }

  private findProducAndAmount(product: Product): [Product, number] {
    return this.baughtProducts.find(p => p['0'] === product);
  }
}
