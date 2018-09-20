import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input()
  isEmpty: boolean;

  @Output()
  clickCart = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  getImageLink(): string {
    let pathToImage = '../../../assets/images/';
    if (this.isEmpty) {
      pathToImage += 'empty-cart-icon.png';
    } else {
      pathToImage += 'cart-icon.png';
    }
    return pathToImage;
  }
}
