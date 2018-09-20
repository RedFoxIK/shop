import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showBougthProducts = false;

  showCartProductList(showCartList: boolean) {
    this.showBougthProducts = showCartList;
  }
}
