import { NgModule } from '@angular/core';

import { OrderServise } from './services/order.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    providers: [OrderServise],
    imports: [SharedModule],
    declarations: []
})
export class OrderModule {
}
