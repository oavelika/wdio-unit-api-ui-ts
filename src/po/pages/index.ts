import { DashboardPage } from "./dashboard.page";
import { DoctorsPage } from "./doctors.page";
import { SchedulePage } from "./schedule.page";
import { PreferencePage } from "./preference.page";
import { PatientsPage } from "./patients.page";

/**
 * @param name {'dashboard' | 'doctors'}
 * @returns {DashboardPage | DoctorsPage}
 */

function page(name) {
    const items = {
        dashboard: new DashboardPage(),
        doctors: new DoctorsPage(),
        schedule: new SchedulePage(),
        preference: new PreferencePage(),
        patients: new PatientsPage()
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
