const { PreferenceControlComponent, TitleComponent } = require('../components');

import { BasePage } from './base.page';

export class PreferencePage extends BasePage {

    constructor() {
        super("#/preference");
        this.preferenceTitle = new TitleComponent();
        this.preferenceControl = new PreferenceControlComponent();
    };
}


