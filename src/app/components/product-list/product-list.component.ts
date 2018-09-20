import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output()
  clickCart = new EventEmitter<boolean>();

  isEmptyCart: boolean;
  products: Array<Product>;

  constructor(private productService: ProductService,
    private cartService: CartService) {
    }

  ngOnInit() {
    this.products = this.productService.getAvailableProducts();
    this.isEmptyCart = this.cartService.isEmpty();
  }

  onBuy(product: Product): void {
    product.isAvailable = false;
    this.isEmptyCart = false;
    this.cartService.addBaughtProduct(product);
  }
}
