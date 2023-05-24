import { AddDoctorModal, SpecialistCard, TitleComponent } from '../components';
import { BasePage } from './base.page';

export class DoctorsPage extends BasePage {


    constructor() {
        super("#/doctors");
        this.doctorsListHeader = new TitleComponent();
        this.addDoctorsModal = new AddDoctorModal();

    };

    specialistCard(id) {
        return new SpecialistCard(id);
    }
}
