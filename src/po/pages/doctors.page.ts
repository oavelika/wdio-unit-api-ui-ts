import { AddDoctorModal, SpecialistCard, TitleComponent } from '@components';
import { BasePage } from '@basepage';

export class DoctorsPage extends BasePage {
    doctorsListHeader
    addDoctorsModal

    constructor() {
        super("#/doctors");
        this.doctorsListHeader = new TitleComponent();
        this.addDoctorsModal = new AddDoctorModal();
    }

    specialistCard(id) {
        return new SpecialistCard(id);
    }
}
