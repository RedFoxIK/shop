import { Injectable, InjectionToken } from '@angular/core';

import { CoreModule } from '../core.module';

export const ID_GENERATOR = new InjectionToken<number>('');
export const LOGIN_GENERATOR = new InjectionToken<string>('');

@Injectable({providedIn: CoreModule})
export class GeneratorService {
    private readonly symbolsAmount = 61;
    private readonly numbersAmount = 10;
    private readonly charCodes: Array<[string, number]> = [['A-Z', 65], ['a-z', 97], ['0-9', 48]];

    generateRandomSequence(n: number): string {
        let sequence = '';

        for (let i = 0; i < n; i++) {
            const random = Math.floor(Math.random() * this.symbolsAmount);
            const seqNum = Math.floor(random / 26);
            const currentCharCode = this.charCodes[seqNum]['1'] + random - seqNum * 26;

            sequence += String.fromCharCode(currentCharCode);
        }
        return sequence;
    }

    generateRandomNumSequence(n: number): number {
        let sequence = '';
        for (let i = 0; i < n; i++) {
            const random = Math.floor(Math.random() * this.numbersAmount);
            sequence += String.fromCharCode(48 + random);
        }
        return Number(sequence);
    }
}

export function IdGeneratorFactory(n: number) {
    return function(generatorService: GeneratorService): number {
      return generatorService.generateRandomNumSequence(n);
    };
}

export function LoginGeneratorFactory(n: number) {
    return function(generatorService: GeneratorService): string {
      return generatorService.generateRandomSequence(n);
    };
}