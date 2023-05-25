import { CalendarComponent } from '@components';
import { BasePage } from '@pages';

export class SchedulePage extends BasePage {
    calendar: object | string


    constructor() {
        super("#/calendar");
        this.calendar = new CalendarComponent();
    }
}

