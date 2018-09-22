import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RunesListComponent } from './components/runes-list/runes-list.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
    {path: 'runes-list', component: RunesListComponent},
    {path: 'settings', component: SettingsComponent},
    {path: '', redirectTo: '/runes-list', pathMatch: 'full'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
