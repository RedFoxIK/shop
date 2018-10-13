import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({providedIn: CoreModule})
export class ConfigOptionService {
    private configs: Map<string, string> = new Map();

    public setCongig(key: string, value: string): void {
        this.configs.set(key, value);
    }

    public getConfig(key: string): string {
        return this.configs.get(key);
    }

    public deleteCongig(key: string): void {
        this.configs.delete(key);
    }
}
