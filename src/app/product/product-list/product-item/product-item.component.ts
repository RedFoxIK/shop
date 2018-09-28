import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product: Product;

  constructor() { }

  ngOnInit() {
  }

  getImageLink(): string {
    return '../../assets/images/' + this.product.imageName;
  }

  onBuy() {
    this.product.isAvailable = false;
  }

  setClasses() {
    const available = this.product.isAvailable;
    return {
      not_available: !available,
      expensive: this.product.price >= 500 && available,
      cheap: this.product.price < 100 && available
    };
  }
}
