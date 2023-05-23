const { AddPatientComponent, PatientCardComponent, TitleComponent } = require('../components');
const BasePage = require('./base.page');

class PatientPage extends BasePage {

    constructor() {
        super("#/patients");
        this.addPatient = new AddPatientComponent();
        this.patientListHeader = new TitleComponent();
    };

    patientCard(id) {
        return new PatientCardComponent(id);
    }
}

module.exports = PatientPage;
