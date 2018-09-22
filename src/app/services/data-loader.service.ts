import { Injectable } from '@angular/core';

import {Rune} from '../models/Rune';
import { Monster } from '../models/Monster';

@Injectable()
export class DataLoaderService {

    private data: SWPlayerData;

    constructor() { }

    public loadPlayerData(filePath: string) {
        const file = window.fs.readFileSync(filePath, 'utf-8');
        this.data = JSON.parse(file);
    }

    public loadMonstersData() {
        const file = window.fs.readFileSync('./src/app/data/monsters.json', 'utf-8');
        Monster.monstersNames = JSON.parse(file);
    }

    public get PlayerData(): SWPlayerData {
        return this.data;
    }
}
