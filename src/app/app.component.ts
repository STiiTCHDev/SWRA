import {Component, OnInit} from '@angular/core';
import {Rune} from './models/Rune';
import { DataLoaderService } from './services/DataLoader.service';
import { Attribute } from './models/Stats';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    private dataloader: DataLoaderService;
    private data: SWPlayerData;
    private runes: Rune[];

    constructor(public dataLoaderService: DataLoaderService) {

        this.dataloader = dataLoaderService;
        this.dataloader.loadPlayerData('./src/app/data/playerdata.json');
        this.runes = this.dataloader.getRunes();

        // console.log(this.data);
        console.log(this.runes);

        const test = [];
        for (const rune of this.runes) {
            if (rune.Main.Type === Attribute.AttackPercent) {
                test.push(rune);
            }
        }

        console.log(test);
    }

}
