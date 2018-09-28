import { NgModule } from '@angular/core';
import { HighlightParentDirective } from './highlight.directive';

@NgModule({
    declarations: [HighlightParentDirective],
    exports: [HighlightParentDirective],
    providers: [],
  })
  export class SharedModule { }
