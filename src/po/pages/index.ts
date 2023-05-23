const DashboardPage = require("./dashboard.page");
const DoctorsPage = require("./doctors.page");
const SchedulePage = require("./schedule.page");
const PreferencePage = require("./preference.page");
const PatientPage = require("./patient.page");

/**
 * @param nome {'dashboard' | 'doctors'}
 * @returns {DashboardPage | DoctorsPage}
 */

function page(name) {
    const items = {
        dashboard: new DashboardPage(),
        doctors: new DoctorsPage(),
        schedule: new SchedulePage(),
        preference: new PreferencePage(),
        patient: new PatientPage()
    };

    return items[name.toLowerCase()];
}

module.exports = {
    DashboardPage,
    DoctorsPage,
    SchedulePage,
    PreferencePage,
    page
};
