import { AddDoctorModal, SpecialistCard, TitleComponent } from '@components';
import { BasePage } from '@pages';

export class DoctorsPage extends BasePage {
    doctorsListHeader: object | string
    addDoctorsModal: object | string

    constructor() {
        super("#/doctors");
        this.doctorsListHeader = new TitleComponent();
        this.addDoctorsModal = new AddDoctorModal();

    }

    specialistCard(id: number) {
        return new SpecialistCard(id);
    }
}
