
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import { page } from '../po/pages';

describe("Test suite", () => {
    beforeEach(async () => {
        await page('dashboard').open();
    });

    it("Check error messages and text", async () => {

        // Open the page
        // Open the Doctor page
        // Click Add new doctor Btn
        // Click Save btn
        // Verify that all requred error messages have been displayed

        await page('dashboard').sideMenu.item('doctors').waitAndClick();

        await page('doctors').doctorsListHeader.item('doctors').addNewDoctorBtn.waitAndClick();

        await browser.waitUntil(async () => {
            const waitResults = await browser.$('div[id="_title"]');
            return waitResults.isDisplayed();
        }, {
            timeout: 2000,
            timeoutMsg: 'The result has not been displayed after 2s'
        });

        await page('doctors').addDoctorsModal.saveBtn.click();

        await browser.execute('window.scrollTo(0, document.body.scrollHeight)');

        await page('doctors').addDoctorsModal.errorMessage('name').waitForDisplayed();
        await page('doctors').addDoctorsModal.errorMessage('phone').waitForDisplayed();
        await page('doctors').addDoctorsModal.errorMessage('email').waitForDisplayed();
        await page('doctors').addDoctorsModal.errorMessage('education').waitForDisplayed();

        await expect(page('doctors').addDoctorsModal.errorMessage('name')).toHaveText('Enter valid name');
        await expect(page('doctors').addDoctorsModal.errorMessage('email')).toHaveText('Enter valid email');
        await expect(page('doctors').addDoctorsModal.errorMessage('phone')).toHaveText('Enter valid mobile number');
        await expect(page('doctors').addDoctorsModal.errorMessage('education')).toHaveText('Enter valid education');

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

        await page('doctors').sideMenu.item('doctors').waitAndClick();
        await page('doctors').doctorsListHeader.item('doctors').addNewDoctorBtn.waitAndClick();
        await expect(page('doctors').addDoctorsModal.rootEl).toBeDisplayed();

        await page('doctors').addDoctorsModal.input('name').setValue(docName);
        await page('doctors').addDoctorsModal.input('phone').setValue(docPhone);
        await page('doctors').addDoctorsModal.input('email').setValue(docEmail);

        await page('doctors').addDoctorsModal.input('education').click();

        await browser.action('key')
            .down('M')
            .down('I')
            .down('T')
            .perform();

        await saveNewDoctorBtn.waitAndClick();

        await expect(page('doctors').specialistCard(8).name).toHaveText(`Dr. ${docName}`);
        await expect(page('doctors').specialistCard(8).education).toHaveText(docEducation);

    });

    it("Verify that a schedule calendar exists", async () => {

        // Open the page
        // Open the Schedule page page
        // Verify that the schedule calendar exist

        await page('dashboard').sideMenu.item('schedule').waitAndClick();
        await expect(page('schedule').calendar.rootEl).toBeDisplayed();
        await expect(page('schedule').calendar.rootEl).toExist();

    });

    it("Verify that a preference exists", async () => {

        // Open the page
        // Open the Schedule page page
        // Verify that the schedule calendar exist

        await page('dashboard').sideMenu.item('preference').waitAndClick();
        await page('preference').preferenceControl.rootEl.waitForDisplayed();

        const defaultViewEl = await page('preference').preferenceControl.label('view').getValue();
        await page('preference').preferenceControl.label('view').isEqual(defaultViewEl);

        const calendarStartTimeEl = await page('preference').preferenceControl.label('startTime').getValue();
        await page('preference').preferenceControl.label('startTime').isEqual(calendarStartTimeEl);

        const calendarEndTimeEl = await page('preference').preferenceControl.label('endTime').getValue();
        await page('preference').preferenceControl.label('endTime').isEqual(calendarEndTimeEl);

        const slotDurationEl = await page('preference').preferenceControl.label('duration').getValue();
        await page('preference').preferenceControl.label('duration').isEqual(slotDurationEl);

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

        await page('dashboard').sideMenu.item('patients').waitAndClick();

        await page('patient').patientListHeader.item('patients').addNewPatientBtn.waitAndClick();

        await page('patient').addPatient.rootEl.waitForDisplayed();
        await page('patient').addPatient.input('name').setValue(patienName);
        await page('patient').addPatient.input('phone').setValue(patientPhone);
        await page('patient').addPatient.input('email').setValue(patientEmail);

        await page('patient').addPatient.saveBtn.waitAndClick();

        await page('patient').patientListHeader.rootEl.waitForDisplayed();
        await expect(page('patient').patientCard(7).name).toHaveText(patienName);
        await expect(page('patient').patientCard(7).email).toHaveText(patientEmail);

    });

    it("Verify that the Title exists", async () => {

        // Open the page
        // Verify that the Title exists

        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');

    });

    it("Verify that the List of patients exists", async () => {

        // Open the page
        // Verify that the List of patients exists

        await page('dashboard').sideMenu.item('patients').waitAndClick();

        const listItems = await $$('[aria-rowindex]');

        await expect(listItems).toBeElementsArrayOfSize(7);

    });

    it("Verify that the Link contains a text", async () => {

        // Open the page
        // Verify that the Link contains a text

        await expect(browser).toHaveUrlContaining('showcase');

    });

});
