import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartItemComponent } from './cart-list/cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  exports: [
    CartListComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ]
})
export class CartModule { }
