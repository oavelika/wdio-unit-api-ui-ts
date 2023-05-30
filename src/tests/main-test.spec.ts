
import { expect, assert } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import { page as pages } from '../po/pages';

describe("Test suite", () => {

    beforeEach(async () => {
        await pages('dashboard').open();
    });

    it("Check error messages and text", async () => {

        // Open the page
        // Open the Doctor page
        // Click Add new doctor Btn
        // Click Save btn
        // Verify that all requred error messages have been displayed

        await pages('dashboard').sideMenu.item('doctors').waitAndClick();

        await pages('doctors').doctorsListHeader.addNewDoctorBtn.waitAndClick();

        await browser.waitUntil(async () => {
            const waitResults = await browser.$('div[id="_title"]');
            return waitResults.isDisplayed();
        }, {
            timeout: 2000,
            timeoutMsg: 'The result has not been displayed after 2s'
        });

        await pages('doctors').addDoctorsModal.saveBtn.click();

        await browser.execute('window.scrollTo(0, document.body.scrollHeight)');

        await pages('doctors').addDoctorsModal.errorMessage('name').waitForDisplayed();
        await pages('doctors').addDoctorsModal.errorMessage('phone').waitForDisplayed();
        await pages('doctors').addDoctorsModal.errorMessage('email').waitForDisplayed();
        await pages('doctors').addDoctorsModal.errorMessage('education').waitForDisplayed();

        const errorName = await pages('doctors').addDoctorsModal.errorMessage('name').getText();
        const errorEmail = await pages('doctors').addDoctorsModal.errorMessage('email').getText();
        const errorPhone = await pages('doctors').addDoctorsModal.errorMessage('phone').getText();
        const errorEducation = await pages('doctors').addDoctorsModal.errorMessage('education').getText();

        await expect(errorName).to.be.equal('Enter valid name');
        await expect(errorEmail).to.be.equal('Enter valid email');
        await expect(errorPhone).to.be.equal('Enter valid mobile number');
        await expect(errorEducation).to.be.equal('Enter valid education');

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

        await expect(getDoctorName).to.be.equal(`Dr. ${docName}`);
        await expect(getDoctorEducation).to.be.equal(docEducation);

    });

    it("Verify that a schedule calendar exists", async () => {

        // Open the page
        // Open the Schedule page page
        // Verify that the schedule calendar exist

        await pages('dashboard').sideMenu.item('schedule').waitAndClick();
        await pages('schedule').calendar.rootEl.waitForDisplayed();
        assert.exists(await pages('schedule').calendar.rootEl, 'calendar doesnt exist on the calendar page');

    });

    it("Verify that a preference exists", async () => {

        // Open the page
        // Open the Schedule page page
        // Verify that the schedule calendar exist

        await pages('dashboard').sideMenu.item('preference').waitAndClick();
        await pages('preference').preferenceControl.rootEl.waitForDisplayed();

        const defaultViewEl = await pages('preference').preferenceControl.label('view').getText();
        await expect(defaultViewEl).to.be.equal('Default View');

        const calendarStartTimeEl = await pages('preference').preferenceControl.label('startTime').getText();
        await expect(calendarStartTimeEl).to.be.equal('Calendar Start Time');

        const calendarEndTimeEl = await pages('preference').preferenceControl.label('endTime').getText();
        await expect(calendarEndTimeEl).to.be.equal('Calendar End Time');

        const slotDurationEl = await pages('preference').preferenceControl.label('duration').getText();
        await expect(slotDurationEl).to.be.equal('Slot Duration');

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

        await expect(getPatientName).to.be.equal(patienName);
        await expect(getPatientEmail).to.be.equal(patientEmail);

    });

    it("Verify that the Title exists", async () => {

        // Open the page
        // Verify that the Title exists

        const getTitle = await browser.getTitle();
        expect(getTitle).to.be.equal('Appointment Planner - Syncfusion Angular Components Showcase App');

    });

    it("Verify that the List of patients exists", async () => {

        // Open the page
        // Verify that the List of patients exists

        await pages('dashboard').sideMenu.item('patients').waitAndClick();

        const listItems = await $$('[aria-rowindex]');
        expect(listItems).to.be.a('array').to.have.length(7);
    });

    it("Verify that the Link contains a text", async () => {

        // Open the page
        // Verify that the Link contains a text
        const mainUrl = await browser.getUrl();

        expect(mainUrl).to.include('showcase');

    });

});
