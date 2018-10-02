import { Component, Optional, Inject } from '@angular/core';
import { ConstantsService } from '../../../core/services/constants.service';
import { ConfigOptionService } from '../../../core/services/config-option.service';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { ID_GENERATOR, IdGeneratorFactory, GeneratorService,
  LOGIN_GENERATOR, LoginGeneratorFactory } from '../../../core/services/generator.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [
    { provide: ID_GENERATOR, useFactory: IdGeneratorFactory(7), deps: [GeneratorService] },
    { provide: LOGIN_GENERATOR, useFactory: LoginGeneratorFactory(10), deps: [GeneratorService] },
  ]
})
export class ContactUsComponent {

  constructor (
    @Optional() private constantsService: ConstantsService,
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
    this.configOptionService.setId(Number(this.localStorageService.getItem('userId')));
    this.configOptionService.setLogin(this.localStorageService.getItem('userLogin'));
    this.configOptionService.setEmail(this.localStorageService.getItem('email'));
  }

  private dispalayMainIfoToConsole(): void {
    this.displayDelimeter();
    console.log(`The application - ${JSON.stringify(this.constantsService.webApp)}`);
    console.log(`The author - ${JSON.stringify(this.constantsService.webApp)}`);

    this.displayDelimeter();
    console.log(`current user: id - ${this.configOptionService.getId()}, `
    + `login - ${this.configOptionService.getLogin()}\n`
    + `always new email - ${this.configOptionService.getEmail()}`);
  }

  private displayDelimeter() {
    console.log('_'.repeat(50));
  }
}
