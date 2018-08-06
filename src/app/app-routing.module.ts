import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RunesListComponent } from './components/runes-list/runes-list.component';

const routes: Routes = [
    {path: 'home', component: RunesListComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
