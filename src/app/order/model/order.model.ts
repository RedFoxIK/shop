import { Product } from '../../product/models/product.model';

export class Order {
    constructor(private orderedProducts: Array<[Product, number]>) {
    }

    getOrderedProducts(): Array<[Product, number]> {
        return this.orderedProducts;
    }
}
