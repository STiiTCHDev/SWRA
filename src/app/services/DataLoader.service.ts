import { Injectable } from '@angular/core';
import {Rune} from '../models/Rune';

@Injectable()
export class DataLoaderService {

    private data: SWPlayerData;

    constructor() { }

    public loadPlayerData(filepath: string) {
        const file = window.fs.readFileSync(filepath, 'utf-8');
        this.data = JSON.parse(file);
    }

    public getRunes(): Rune[] {
        const runes: Rune[] = [];

        for (const runeData of this.data.runes) {
            runes.push(new Rune(runeData));
        }

        for (const monster of this.data.unit_list) {
            for (const runeData of monster.runes) {
                runes.push(new Rune(runeData));
            }
        }

        return runes;
    }

}
