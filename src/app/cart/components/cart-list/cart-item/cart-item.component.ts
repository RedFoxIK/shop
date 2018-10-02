import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../../product/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input()
  product: Product;

  @Output()
  addItem = new EventEmitter<Product>();

  @Output()
  removeItem = new EventEmitter<Product>();

  private itemsAmount = 1;

  constructor() { }

  ngOnInit() {
  }

  getImageLink(): string {
    return '../../assets/images/' + this.product.imageName;
  }

  addProductItem() {
    if (this.itemsAmount < this.product.amount) {
      this.itemsAmount++;
      this.addItem.emit(this.product);
    }
  }

  removeProductItem() {
    if (this.itemsAmount > 1) {
      this.itemsAmount--;
      this.removeItem.emit(this.product);
    }
  }
}
