const BaseComponent = require('../common/base.component');

class PreferenceControlComponent extends BaseComponent {
    constructor() {
        super('.preference-container');
    }

    label(name) {
        const selectors = {
            view: "//div[.='Default ViewWeekly']",
            startTime: "//div[.='Calendar Start Time']",
            endTime: "//div[.='Calendar End Time']",
            duration: "//div[.='Slot Duration']"
        };
        return $(selectors[name.toString()]);

    }
}

module.exports = PreferenceControlComponent;
