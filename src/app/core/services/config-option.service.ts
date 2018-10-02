import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({providedIn: CoreModule})
export class ConfigOptionService {
    private id: number;
    private login: string;
    private email: string;

    public setId(id: number): void {
        this.id = id;
    }

    public setLogin(login: string): void {
        this.login = login;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getId(): number {
        return this.id;
    }

    public getLogin(): string {
        return this.login;
    }

    public getEmail(): string {
        return this.email;
    }
}
