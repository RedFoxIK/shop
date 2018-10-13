import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output()
  clickCart = new EventEmitter<boolean>();

  isEmptyCart: boolean;
  products$: Promise<Array<Product>>;

  constructor(
    public productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    this.isEmptyCart = this.cartService.isEmpty();
    this.products$ = this.productService.getAvailableProducts();
  }

  onBuy(product: Product): void {
    product.choosen = true;
    this.isEmptyCart = false;
    this.cartService.addProduct(product);
  }
}
