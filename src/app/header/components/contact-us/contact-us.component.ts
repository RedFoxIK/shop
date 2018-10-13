import { Component, Optional, Inject, InjectionToken } from '@angular/core';

import { ConfigOptionService } from '../../../core/services/config-option.service';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import {
  ID_GENERATOR, IdGeneratorFactory, GeneratorService,
  LOGIN_GENERATOR, LoginGeneratorFactory
} from '../../../core/services/generator.service';

export const ConstantsService = new InjectionToken<any>('constants');
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [
    { provide: ID_GENERATOR, useFactory: IdGeneratorFactory(7), deps: [GeneratorService] },
    { provide: LOGIN_GENERATOR, useFactory: LoginGeneratorFactory(10), deps: [GeneratorService] },
    {
      provide: ConstantsService, useValue: {
        webApp: { name: 'MegaShop', version: '1.0' },
        author: { name: 'Yaroslava', surname: 'Kalashnyk' }
      }
    }
  ]
})
export class ContactUsComponent {

  constructor(
    @Inject(ConstantsService) private constantsService: any,
    @Optional() private configOptionService: ConfigOptionService,
    @Optional() private localStorageService: LocalStorageService,
    @Optional() private generatorService: GeneratorService,
    @Inject(ID_GENERATOR) private userId: number,
    @Inject(LOGIN_GENERATOR) private userLogin: string
  ) { }


  onClick() {
    this.saveInfoToLocalStorage();
    this.saveInfoToConfigServiceFromLocalStorage();
    this.dispalayMainIfoToConsole();
  }

  private saveInfoToLocalStorage(): void {
    this.localStorageService.setItem('userId', this.userId.toString());
    this.localStorageService.setItem('userLogin', this.userLogin);
    this.localStorageService.setItem('email', this.generatorService.generateRandomSequence(6) + '@.example.com');
  }

  private saveInfoToConfigServiceFromLocalStorage(): void {
    this.configOptionService.setCongig('id', this.localStorageService.getItem('userId'));
    this.configOptionService.setCongig('login', this.localStorageService.getItem('userLogin'));
    this.configOptionService.setCongig('email', this.localStorageService.getItem('email'));
  }

  private dispalayMainIfoToConsole(): void {
    this.displayDelimeter();
    console.log(`The application - ${JSON.stringify(this.constantsService.webApp)}`);
    console.log(`The author - ${JSON.stringify(this.constantsService.webApp)}`);

    this.displayDelimeter();
    console.log(`current user: id - ${this.configOptionService.getConfig('id')}, `
      + `login - ${this.configOptionService.getConfig('login')}\n`
      + `always new email - ${this.configOptionService.getConfig('email')}`);
  }

  private displayDelimeter() {
    console.log('_'.repeat(50));
  }
}
