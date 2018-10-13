import { NgModule } from '@angular/core';
import { HighlightParentDirective } from './directives/highlight.directive';
import { OrderByPipePipe } from './pipes/order-by-pipe.pipe';

@NgModule({
    declarations: [HighlightParentDirective, OrderByPipePipe],
    exports: [HighlightParentDirective, OrderByPipePipe],
    providers: []
  })
  export class SharedModule { }
