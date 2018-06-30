import {Component, OnInit} from '@angular/core';
import {DataLoaderService} from './services/DataLoader.service';

import {Rune} from './models/Rune';

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
        this.dataloader.loadMonstersData();
        this.runes = this.dataloader.Runes;
    }
}
