import { BaseComponent } from "@components";

export class HeaderComponent extends BaseComponent {

    constructor() {
        super('.e-content-animation .planner-header');
    }

    get logoutBtn() {
        return this.rootEl.$('.logout-icon-container');

    }
}

