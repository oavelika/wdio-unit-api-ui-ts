import { BaseComponent } from '../common/base.component';

class AddPatientComponent extends BaseComponent {
    constructor() {
        super('.new-patient-dialog');
    }

    get saveBtn() {
        return this.rootEl.$(' .e-primary');
    }

    /**
     * 
     * @param name {'name' | 'phone' | 'education' | 'email'}  
     * @returns {*}
     */

    input(name) {
        const selectors = {
            name: '[name="Name"]',
            phone: '#PatientMobile',
            email: '[name="Email"]'
        };
        return this.rootEl.$(selectors[name.toLowerCase()]);

    }
}

export { AddPatientComponent };
