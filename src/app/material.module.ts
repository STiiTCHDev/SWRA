import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


const modules = [
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule
];

@NgModule({
    imports: [...modules],
    exports: [...modules]
})
export class MaterialModule { }
