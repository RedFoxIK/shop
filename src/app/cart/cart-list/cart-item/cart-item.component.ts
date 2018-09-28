import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../product/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input()
  product: Product;

  constructor() { }

  ngOnInit() {
  }

  getImageLink(): string {
    return '../../assets/images/' + this.product.imageName;
  }

  onBuy(event: any) {
    this.product.isAvailable = false;
  }
}
