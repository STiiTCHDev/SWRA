import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DataLoaderService } from '../../services/data-loader.service';
import { Rune } from '../../models/Rune';

@Component({
    selector: 'app-runes-list',
    templateUrl: './runes-list.component.html',
    styleUrls: ['./runes-list.component.scss']
})
export class RunesListComponent implements OnInit, AfterViewInit {

    runes: Rune[];
    displayedColumns = ['setType'];
    dataSource: MatTableDataSource<any>;

    @ViewChild(MatPaginator)
    paginator: MatPaginator;

    constructor(private dataloader: DataLoaderService) { }

    ngOnInit() {
        this.runes = this.dataloader.Runes;
        this.dataSource = new MatTableDataSource(this.runes);
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    get Chips(): any[] {
        return [
            {name: 'Nombre de runes', value: this.runes.length}
        ];
    }

}
