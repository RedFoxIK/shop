
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product-item/product-item.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
      ProductComponent,
      ProductListComponent
    ],
    imports: [
      BrowserModule,
      CoreModule,
      SharedModule
    ],
    exports: [ProductListComponent]
  })
  export class ProductModule {
  }
