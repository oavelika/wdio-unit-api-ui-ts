import { BaseComponent } from '@basecomponent';

export class PatientCardComponent extends BaseComponent {
    constructor(id) {
        super(`.e-row[aria-rowindex="${id}"]`);
    }

    /**
     * 
     * @param name {'name' | 'phone' | 'education' | 'email'}  
     * @returns {*}
     */
    get name() {
        return this.rootEl.$('.patient-name');
    }

    get email() {
        return this.rootEl.$(`[aria-colindex="6"]`);
    }


}

