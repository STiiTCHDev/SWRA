import { Injectable } from '@angular/core';
import { Rune } from '../models/Rune';
import { Monster } from '../models/Monster';

@Injectable()
export class RunesContainerService {

    private runes: Rune[];

    constructor() { }

    public importData(data: SWPlayerData) {
        this.runes = [];
        for (const runeData of data.runes) {
            this.runes.push(new Rune(runeData));
        }

        const monsters: Monster[] = [];
        for (const unit of data.unit_list) {
            const monster = new Monster(unit);
            monsters.push(monster);

            for (const rune of monster.Runes) {
                this.runes.push(rune);
            }
        }
    }

    public get Runes(): Rune[] {
        return this.runes;
    }

}


