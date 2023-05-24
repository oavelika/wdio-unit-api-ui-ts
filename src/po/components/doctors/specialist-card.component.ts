import { BaseComponent } from "@common/base.component";

export class SpecialistCardComponent extends BaseComponent {

    constructor(id: number) {
        super(`#Specialist_${id}`);
    }

    get name() {
        return this.rootEl.$('.name');
    }

    get education() {
        return this.rootEl.$('.education');
    }

}


