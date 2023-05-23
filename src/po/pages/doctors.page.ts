const { AddDoctorModal, SpecialistCard, TitleComponent } = require('../components');
const BasePage = require('./base.page');

class DoctorsPage extends BasePage {


    constructor() {
        super("#/doctors");
        this.doctorsListHeader = new TitleComponent();
        this.addDoctorsModal = new AddDoctorModal();

    };

    specialistCard(id) {
        return new SpecialistCard(id);
    }
}

module.exports = DoctorsPage;
