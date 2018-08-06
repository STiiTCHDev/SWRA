import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RunesListComponent } from './components/runes-list/runes-list.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DataLoaderService } from './services/data-loader.service';
import { MaterialModule } from './material.module';

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
        MaterialModule
    ],
    providers: [DataLoaderService],
    bootstrap: [AppComponent]
})
export class AppModule { }
