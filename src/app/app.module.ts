import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CartComponent } from './components/cart/cart.component';

import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpModule } from '@angular/http';
import { ProductComponent } from './components/product/product.component';
import { CarlListProductComponent } from './components/cart-list-product/cart-list-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ProductListComponent,
    CarlListProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
