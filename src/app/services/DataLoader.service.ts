import { Injectable } from '@angular/core';
import {Rune} from '../models/Rune';
import { Monster } from '../models/Monster';

@Injectable()
export class DataLoaderService {

    private data: SWPlayerData;
    private runes: Rune[];
    private monsters: Monster[];

    constructor() { }

    public loadPlayerData(filepath: string) {
        const file = window.fs.readFileSync(filepath, 'utf-8');
        this.data = JSON.parse(file);

        this.runes = [];
        for (const runeData of this.data.runes) {
            this.runes.push(new Rune(runeData));
        }

        this.monsters = [];
        for (const unit of this.data.unit_list) {
            const monster = new Monster(unit);
            this.monsters.push(monster);

            for (const rune of monster.Runes) {
                this.runes.push(rune);
            }
        }
    }

    public loadMonstersData() {
        const file = window.fs.readFileSync('./src/app/data/monsters.json', 'utf-8');
        Monster.monstersNames = JSON.parse(file);
    }

    public get Runes(): Rune[] {
        return this.runes;
    }

    public get Monsters(): Monster[] {
        return this.monsters;
    }
}
