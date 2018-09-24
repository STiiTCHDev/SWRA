import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MenuModule } from 'primeng/menu';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RunesListComponent } from './components/runes-list/runes-list.component';
import { SettingsComponent } from './components/settings/settings.component';

import { DataLoaderService } from './services/data-loader.service';
import { RunesContainerService } from './services/runes-container.service';
import { ThemeSelectorService } from './services/theme-selector.service';

@NgModule({
    declarations: [
        AppComponent,
        RunesListComponent,
        SettingsComponent
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        FormsModule,
        AppRoutingModule,

        MenuModule,
        DataViewModule,
        PanelModule,
        ListboxModule,
        DropdownModule
    ],
    providers: [
        DataLoaderService,
        RunesContainerService,
        ThemeSelectorService],
    bootstrap: [AppComponent]
})
export class AppModule { }
