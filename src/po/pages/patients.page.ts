import { AddPatientComponent, PatientCardComponent, TitleComponent } from '@components';
import { BasePage } from '@basepage';

export class PatientsPage extends BasePage {
    addPatient
    patientListHeader

    constructor() {
        super("#/patients");
        this.addPatient = new AddPatientComponent();
        this.patientListHeader = new TitleComponent();
    }

    patientCard(id) {
        return new PatientCardComponent(id);
    }
}

