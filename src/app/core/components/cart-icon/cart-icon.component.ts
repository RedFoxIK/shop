import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {
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
