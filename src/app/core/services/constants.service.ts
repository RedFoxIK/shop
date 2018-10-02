import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({providedIn: CoreModule})
export class ConstantsService {
    public readonly webApp = { name: 'MegaShop', version: '1.0' };
    public readonly author = { name: 'Yaroslava', surname: 'Kalashnyk' };
}
