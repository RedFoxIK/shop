import { Injectable } from '@angular/core';

import { isNullOrUndefined } from 'util';
import { Product } from '../models/product.model';
import { Category } from '../enums/category.enum';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  products: Array<Product>;

  constructor() { }

  getAvailableProducts(): Promise<Array<Product>> {
    if (isNullOrUndefined(this.products)) {
      this.products = this.getDefaultProductsList();
    }
    return new Promise((resolve) => {
      setTimeout(() => {
      resolve(this.products);
      }, 500);
    }).catch(error => error);
  }

  substractProducts(productsAmount: Array<[Product, number]>): void {
    productsAmount.forEach(productAmount => {
      const foundedProduct = this.products.find(product => product === productAmount['0']);
      if (foundedProduct) {
        foundedProduct.amount -= productAmount['1'];
        foundedProduct.choosen = false;
      }
    });
  }

  private getDefaultProductsList(): Array<Product> {
    return [
      new Product(1, 'Apple Iphone 6s', 'iphone.png', 1099, Category.PHONE),
      new Product(2, 'Mouse logitech', 'mouse_logitech.png', 17, Category.OTHERS, 10),
      new Product(3, 'Sony Playstation', 'playstation.png', 513, Category.GAME_CONSOLE),
      new Product(4, 'Xbox one S', 'xbox.png', 412, Category.GAME_CONSOLE),
      new Product(5, 'Xiaomi powerbank', 'xiaomi_powerbank.png', 133, Category.OTHERS),
      new Product(6, 'Samsung galaxy 6s', 'samsung-phone.png', 802, Category.PHONE),
      new Product(7, 'Monster Beats', 'monster_beats.png', 159, Category.OTHERS),
      new Product(8, 'Sony headphones', 'sony_headphones.png', 212, Category.OTHERS),
      new Product(9, 'Asus Zenfone Max Plus', 'asus_phone.png', 499, Category.PHONE),
      new Product(10, 'Xiaomi Redmi Note 4', 'xiaomi-redmi-note-4.png', 315, Category.PHONE),
      new Product(11, 'Lenovo IdeaPad 320', 'lenovo_laptop.png', 1300, Category.LAPTOP),
    ];
  }
}
