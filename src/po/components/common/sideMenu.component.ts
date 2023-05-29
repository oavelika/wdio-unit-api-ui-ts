import { BaseComponent } from "@basecomponent";

export class SideMenuComponent extends BaseComponent {

    constructor() {
        super('.planner-wrapper #plannerSiderBar');
    }

    get name() {
        return this.rootEl.$('.name');
    }

    item(param) {
        const selectors = {
            dashboard: '[routerlink="/dashboard"]',
            schedule: '[routerlink="/calendar"]',
            doctors: '[routerlink="/doctors"]',
            patients: '[routerlink="/patients"]',
            preference: '[routerlink="/preference"]',
            about: '[routerlink="/about"]'
        };
        return this.rootEl.$(selectors[param.toLowerCase()]);
    }
}

