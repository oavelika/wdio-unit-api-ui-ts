const { CalendarComponent } = require('../components');
const BasePage = require('./base.page');

class SchedulePage extends BasePage {

    constructor() {
        super("#/calendar");
        this.calendar = new CalendarComponent();
    };
}

module.exports = SchedulePage;
