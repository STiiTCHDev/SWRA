import { Component, OnInit, Inject } from '@angular/core';

import { DataLoaderService } from './services/data-loader.service';
import { Rune} from './models/Rune';

import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { DOCUMENT } from '@angular/platform-browser';
import { RunesContainerService } from './services/runes-container.service';
import { ThemeSelectorService } from './services/theme-selector.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    menuItems: MenuItem[];

    constructor(private dataLoader: DataLoaderService,
            private runesContainer: RunesContainerService,
            private themeSelector: ThemeSelectorService) { }

    ngOnInit() {
        // Loading data
        this.dataLoader.loadPlayerData('./src/app/data/playerdata.json');
        this.dataLoader.loadMonstersData();
        this.runesContainer.importData(this.dataLoader.PlayerData);

        // Main menu definition
        this.menuItems = [{
            label: 'Runes',
            routerLink: '/runes-list',
            icon: 'pi pi-bars'
        },
        {
            label: 'Paramètres',
            routerLink: '/settings',
            icon: 'pi pi-cog'
        }];
    }
}
