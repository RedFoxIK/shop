import { Component, ViewChild, OnInit, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  showBougthProducts = false;

  @ViewChild('appTitle')
  title: ElementRef;

  ngAfterViewChecked(): void {
    this.title.nativeElement.innerText = 'Mega Shop';
  }

  showCartProductList(showCartList: boolean) {
    this.showBougthProducts = showCartList;
  }
}
