import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class ThemeSelectorService {

    public themes: any[];
    private activeTheme: string;
    private element: HTMLLinkElement;

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.themes = [
            {label: 'Bootstrap', value: 'bootstrap'},
            {label: 'Cruze', value: 'cruze'},
            {label: 'Cupertino', value: 'cupertino'},
            {label: 'Darkness', value: 'darkness'},
            {label: 'Flick', value: 'flick'},
            {label: 'Home', value: 'home'},
            {label: 'Kasper', value: 'kasper'},
            {label: 'Lightness', value: 'lightness'},
            {label: 'Ludvig', value: 'ludvig'},
            {label: 'Luna-amber', value: 'luna-amber'},
            {label: 'Luna-blue', value: 'luna-blue'},
            {label: 'Luna-green', value: 'luna-green'},
            {label: 'Luna-pink', value: 'luna-pink'},
            {label: 'Nova-light', value: 'nova-light'},
            {label: 'Nova-dark', value: 'nova-dark'},
            {label: 'Nova-colored', value: 'nova-colored'},
            {label: 'Omega', value: 'omega'},
            {label: 'Pepper-grinder', value: 'pepper-grinder'},
            {label: 'Redmond', value: 'redmond'},
            {label: 'Rocket', value: 'rocket'},
            {label: 'South-street', value: 'south-street'},
            {label: 'Start', value: 'start'},
            {label: 'Trontastic', value: 'trontastic'},
            {label: 'Voclain', value: 'voclain'},
        ];
        this.ActiveTheme = 'nova-light';
    }

    public get ActiveTheme(): string {
        return this.activeTheme;
    }

    public set ActiveTheme(themeName: string) {
        if (!this.element) {
            this.element = this.document.createElement('link');
            this.element.rel = 'stylesheet';
        }

        this.element.href = themeName + '.bundle.css';
        this.activeTheme = themeName;
        this.document.head.appendChild(this.element);
    }

}
