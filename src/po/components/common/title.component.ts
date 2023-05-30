import { BaseComponent } from "@basecomponent";

export class TitleComponent extends BaseComponent {

    constructor() {
        super('.e-content-animation');
    }

    item(param) {
        const selectors = {
            doctors: 'app-doctors',
            patients: 'app-patients',
            preference: 'app-preference',
        };
        return this.rootEl.$(selectors[param.toLowerCase()]);
    }

    get addNewDoctorBtn() {
        return this.rootEl.$('//button[.="Add New Doctor"]');
    }

    get addNewPatientBtn() {
        return this.rootEl.$('//button[.="Add New Patient"]');
    }
}

