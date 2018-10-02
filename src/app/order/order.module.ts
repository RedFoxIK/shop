import { NgModule } from '@angular/core';

import { OrderServise } from './services/order.service';

@NgModule({
    providers: [OrderServise]
})
export class OrderModule {
}
