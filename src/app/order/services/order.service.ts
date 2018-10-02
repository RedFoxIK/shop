import { Injectable } from '@angular/core';

import { Order } from '../model/order.model';
import { ProductService } from '../../product/services/product.service';


@Injectable()
export class OrderServise {
    constructor(private productService: ProductService) {}

    completeOrder(order: Order) {
        this.productService.substractProducts(order.getOrderedProducts());
    }
}
