import { Component, OnInit, Input } from '@angular/core';

import { Category } from '../../enums/category.enum';
import { Color } from '../../enums/color.enum';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  name: string;
  @Input()
  price: number;
  @Input()
  imageName: string;
  @Input()
  isAvailable: boolean;

  description: string;
  rating: number;
  category: Category;
  availableColors: Array<Color>;
  reviews: Array<string>;

  constructor() { }

  ngOnInit() {
  }

  getImageLink(): string {
    return '../../assets/images/' + this.imageName;
  }

  onBuy(event: any) {
    console.log('The item');
    this.isAvailable = false;
  }
}
