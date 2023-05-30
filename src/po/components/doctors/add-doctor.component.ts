import { BaseComponent } from '@basecomponent';

export class AddDoctorComponent extends BaseComponent {
    constructor() {
        super('.e-control.new-doctor-dialog');
    }

    get saveBtn() {
        return this.rootEl.$('.e-footer-content button.e-primary');
    }

    /**
     * 
     * @param name {'name' | 'phone' | 'education' | 'email'}  
     * @returns {*}
     */

    input(name) {
        const selectors = {
            name: '[name="Name"]',
            phone: '#DoctorMobile',
            education: '[name="Education"]',
            email: '[name="Email"]'
        };
        return this.rootEl.$(selectors[name.toLowerCase()]);

    }

    errorMessage(msg) {
        const selectors = {
            name: '#Name-info',
            phone: '#undefined-info',
            education: '#Education-info',
            email: '#Email-info'
        };
        return this.rootEl.$(selectors[msg.toLowerCase()]);

    }
}


