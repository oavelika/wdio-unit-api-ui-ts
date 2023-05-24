import { BaseComponent } from '@common/base.component';

export class PatientCardComponent extends BaseComponent {
    constructor(id: number) {
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
        return this.rootEl.$('[aria-colindex="6"]');
    }

}

