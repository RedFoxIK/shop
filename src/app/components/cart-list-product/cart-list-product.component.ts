import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list-product',
  templateUrl: './cart-list-product.component.html',
  styleUrls: ['./cart-list-product.component.css']
})
export class CarlListProductComponent implements OnInit {
  cartMessage = 'Your product list: ';
  totalPrice = 0;
  isEmpty: boolean;
  products: Array<Product>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.getBaughtProducts();
    this.products.forEach(p => this.totalPrice += p.price);
    this.checkIfCartIsEmpty();
  }

  onRemove(product: Product) {
    this.totalPrice -= product.price;
    this.products = this.cartService.removeProduct(product);
    this.checkIfCartIsEmpty();
  }

  checkIfCartIsEmpty() {
    this.isEmpty = this.products.length === 0;
    if (this.isEmpty) {
      this.cartMessage = 'Your cart is empty.';
    }
  }
}
