import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Product } from '../../../product/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  messageMapping = {'=0': 'Your cart is empty.', '=1': 'In your cart 1 product.', 'other': 'Products: # items.'};
  baughtProducts: Array<[Product, number]> = new Array();
  totalPrice: number;
  totalAmount: number;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.baughtProducts = this.cartService.getBaughtProducts();
    this.changeTotalPriceAndAmount();

    this.cartService.getBaughtProductsObserver().subscribe( productsAmount => {
      this.baughtProducts = productsAmount;
      this.changeTotalPriceAndAmount();
    });
  }

  addItem(product: Product) {
    this.cartService.addProductItem(product);
  }

  removeItem(product: Product) {
    this.cartService.removeProductItem(product);
  }

  onRemove(productAmount: [Product, number]) {
    this.cartService.removeProduct(productAmount['0']);
  }

  completeOrder() {
    this.cartService.buyProdusts();
  }

  private changeTotalPriceAndAmount() {
    this.totalAmount = this.cartService.getTotalAmount();
    this.totalPrice = this.cartService.getTotalPrice();
  }
}
