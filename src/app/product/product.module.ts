
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product-list/product-item/product-item.component';
import { ProductService } from './services/product.service';

@NgModule({
    declarations: [
      ProductComponent,
      ProductListComponent
    ],
    providers: [ProductService],
    imports: [
      BrowserModule,
      CoreModule,
      SharedModule
    ],
    exports: [ProductListComponent]
  })
  export class ProductModule {
  }
