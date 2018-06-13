import {Component, OnInit} from '@angular/core';
import {Rune} from './models/Rune';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor() {

        let data: SWPlayerData = this.loadPlayerData();

        let runes = [];
        for(let runeData of data.runes) {
            runes.push(new Rune(runeData));
        }

        console.log(runes);
    }

    ngOnInit() {

    }

    loadPlayerData(): SWPlayerData {
        let file = window.fs.readFileSync('./src/app/data/playerdata.json', 'utf-8');
        let data: SWPlayerData = JSON.parse(file);

        return data;
    }

}
