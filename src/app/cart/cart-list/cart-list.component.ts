import { Component, OnInit } from '@angular/core';

import { Product } from '../../product/product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  messageMapping = {'=0': 'Your cart is empty.', '=1': 'In your cart 1 product.', 'other': 'Products: # items.'};
  totalPrice: number;
  totalAmount: number;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.totalPrice = this.cartService.getTotalPrice();
    this.totalAmount = this.cartService.getTotalAmount();
  }

  onRemove(product: Product) {
    this.cartService.removeProduct(product);
    this.totalPrice = this.cartService.getTotalPrice();
    this.totalAmount = this.cartService.getTotalAmount();
  }
}
