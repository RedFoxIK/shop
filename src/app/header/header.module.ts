import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CoreModule } from '../core/core.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [HeaderComponent, ContactUsComponent],
  exports: [HeaderComponent],
})
export class HeaderModule { }
