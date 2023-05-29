import { PreferenceComponent, TitleComponent } from '@components';
import { BasePage } from '@basepage';

export class PreferencePage extends BasePage {
    preferenceTitle: object | string
    preferenceControl: object | string

    constructor() {
        super("#/preference");
        this.preferenceTitle = new TitleComponent();
        this.preferenceControl = new PreferenceComponent();
    }
}


