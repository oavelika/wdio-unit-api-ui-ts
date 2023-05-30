
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import { page as pages } from '@pages';

describe("Add a new person", () => {

    beforeEach(async () => {
        await pages('dashboard').open();
    });

    it("Add a new doctor", async () => {

        // Open the page
        // Open the Doctor page
        // Click Add new doctor Btn
        // Fill out all required fields 
        // Verify that a new doctor has been created

        const saveNewDoctorBtn = $('button:nth-of-type(2)');

        const docName = 'John Smith';
        const docEducation = 'MIT';
        const docEmail = 'john@smith.com';
        const docPhone = '9999999999';

        await pages('doctors').sideMenu.item('doctors').waitAndClick();
        await pages('doctors').doctorsListHeader.addNewDoctorBtn.waitAndClick();
        await pages('doctors').addDoctorsModal.rootEl.waitForDisplayed();

        await pages('doctors').addDoctorsModal.input('name').setValue(docName);
        await pages('doctors').addDoctorsModal.input('phone').setValue(docPhone);
        await pages('doctors').addDoctorsModal.input('email').setValue(docEmail);

        await pages('doctors').addDoctorsModal.input('education').click();

        await browser.action('key')
            .down('M')
            .down('I')
            .down('T')
            .perform();

        await saveNewDoctorBtn.waitAndClick();

        await pages('doctors').doctorsListHeader.item('doctors').waitForDisplayed();

        const getDoctorName = await pages('doctors').specialistCard(8).name.getText();
        const getDoctorEducation = await pages('doctors').specialistCard(8).education.getText();

        await expect(getDoctorName).to.be.equal(`Dr. ${docName}`, `Doctors name doesnt equal expected doctor's name`);
        await expect(getDoctorEducation).to.be.equal(docEducation, `Doctors education doesnt equal expected doctor's name`);

    });

    it("Add a new patient", async () => {

        // Open the page
        // Open the Patient page
        // Click Add new patien Btn
        // Fill out all required fields 
        // Verify that a new doctor has been created

        const patienName = 'Jim Smith';
        const patientEmail = 'jim@smith.com';
        const patientPhone = '9999999999';

        await pages('dashboard').sideMenu.item('patients').waitAndClick();

        await pages('patients').patientListHeader.addNewPatientBtn.waitAndClick();

        await pages('patients').addPatient.rootEl.waitForDisplayed();
        await pages('patients').addPatient.input('name').setValue(patienName);
        await pages('patients').addPatient.input('phone').setValue(patientPhone);
        await pages('patients').addPatient.input('email').setValue(patientEmail);

        await pages('patients').addPatient.saveBtn.waitAndClick();

        await pages('patients').patientListHeader.rootEl.waitForDisplayed();

        const getPatientName = await pages('patients').patientCard(7).name.getText();
        const getPatientEmail = await pages('patients').patientCard(7).email.getText();

        await expect(getPatientName).to.be.equal(patienName, `patient name didnt equal created patient`);
        await expect(getPatientEmail).to.be.equal(patientEmail, `patient email didnt equal created patient`);

    });

});
