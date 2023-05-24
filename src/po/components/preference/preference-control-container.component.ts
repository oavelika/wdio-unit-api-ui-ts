import { BaseComponent } from '@components';

export class PreferenceControlComponent extends BaseComponent {
    constructor() {
        super('.preference-container');
    }

    label(name: string) {
        const selectors = {
            view: "//div[.='Default ViewWeekly']",
            startTime: "//div[.='Calendar Start Time']",
            endTime: "//div[.='Calendar End Time']",
            duration: "//div[.='Slot Duration']"
        };
        return $(selectors[name.toString()]);

    }
}


