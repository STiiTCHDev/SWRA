import { Component, OnInit } from '@angular/core';
import { ThemeSelectorService } from '../../services/theme-selector.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    constructor(public themeSelector: ThemeSelectorService) { }

    ngOnInit() { }

}
