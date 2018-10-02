import { NgModule } from '@angular/core';

import { LocalStorageService } from './services/local-storage.service';
import { GeneratorService } from './services/generator.service';
import { ConstantsService } from './services/constants.service';
import { ConfigOptionService } from './services/config-option.service';

import { CartIconComponent } from './components/cart-icon/cart-icon.component';

@NgModule({
    declarations: [CartIconComponent],
    exports: [CartIconComponent]
  })
  export class CoreModule { }
