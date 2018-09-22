import { Component, OnInit } from '@angular/core';
import { Rune } from '../../models/Rune';
import { RunesContainerService } from '../../services/runes-container.service';

@Component({
    selector: 'app-runes-list',
    templateUrl: './runes-list.component.html',
    styleUrls: ['./runes-list.component.scss']
})
export class RunesListComponent implements OnInit {

    constructor(public runesContainer: RunesContainerService) { }

    ngOnInit() { }

    getStarsCount(grade: number): any[] {
    const array = [];
        for (let i = 0; i < grade; i++) {
            array.push(i);
        }

        return array;
    }

    getSetImageSrc(setTypeName: string): string {
        return 'assets/runes/sets/' + setTypeName.toLowerCase() + '.png';
    }
}
