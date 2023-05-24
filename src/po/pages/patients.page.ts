import { AddPatientComponent, PatientCardComponent, TitleComponent } from '../components';
import { BasePage } from './base.page';

export class PatientsPage extends BasePage {

    constructor() {
        super("#/patients");
        this.addPatient = new AddPatientComponent();
        this.patientListHeader = new TitleComponent();
    };

    patientCard(id) {
        return new PatientCardComponent(id);
    }
}

