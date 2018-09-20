import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';

import { Product } from '../models/product.model';
import { Category } from '../enums/category.enum';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array<Product>;

  constructor(private http: Http) { }

  getAvailableProducts(): Array<Product> {
    if (isNullOrUndefined(this.products)) {
      this.products = this.getDefaultProductsList();
    }
    return this.products;
  }

  private getDefaultProductsList(): Array<Product> {
    return [
      new Product(1, 'Apple Iphone 6s', 'iphone.png', 1099, Category.PHONE),
      new Product(2, 'Asus Zenfone Max Plus', 'asus_phone.png', 599, Category.PHONE),
      new Product(3, 'Lenovo IdeaPad 320', 'lenovo_laptop.png', 1300, Category.LAPTOP),
      new Product(4, 'Sony Playstation', 'playstation.png', 513, Category.GAME_CONSOLE),
      new Product(5, 'Xbox one S', 'xbox.png', 412, Category.GAME_CONSOLE),
      new Product(6, 'Xiaomi powerbank', 'xiaomi_powerbank.png', 133, Category.OTHERS),
      new Product(7, 'Mouse logitech', 'mouse_logitech.png', 17, Category.OTHERS),
      new Product(8, 'Samsung galaxy 6s', 'samsung-phone.png', 802, Category.PHONE),
      new Product(9, 'Monster Beats', 'monster_beats.png', 159, Category.OTHERS),
      new Product(10, 'Sony headphones', 'sony_headphones.png', 212, Category.OTHERS),
      new Product(10, 'Xiaomi Redmi Note 4', 'xiaomi-redmi-note-4.png', 315, Category.PHONE)
    ];
  }
}
