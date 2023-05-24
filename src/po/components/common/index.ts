import { DashboardPage } from "@pages/dashboard.page"
import { DoctorsPage } from "@pages/doctors.page";
import { SchedulePage } from "@pages/schedule.page";
import { PreferencePage } from "@pages/preference.page";
import { PatientsPage } from "@pages/patients.page";

/**
 * @param name {'dashboard' | 'doctors'}
 * @returns {DashboardPage | DoctorsPage}
 */

function page(name: string) {
    const items = {
        dashboard: new DashboardPage(),
        doctors: new DoctorsPage(),
        schedule: new SchedulePage(),
        preference: new PreferencePage(),
        patients: new PatientsPage()
    };

    return items[name.toLowerCase()];
}

export {
    DashboardPage,
    DoctorsPage,
    SchedulePage,
    PreferencePage,
    page
};
