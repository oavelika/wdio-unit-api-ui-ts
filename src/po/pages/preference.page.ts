const { PreferenceControlComponent, TitleComponent } = require('../components');

const BasePage = require('./base.page');

class PreferencePage extends BasePage {

    constructor() {
        super("#/preference");
        this.preferenceTitle = new TitleComponent();
        this.preferenceControl = new PreferenceControlComponent();
    };
}

module.exports = PreferencePage;
