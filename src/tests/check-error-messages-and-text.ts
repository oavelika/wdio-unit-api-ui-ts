
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import { page as pages } from '@pages';

describe("Check error messages and text", () => {

    beforeEach(async () => {
        await pages('dashboard').open();
    });

    it("Check error messages and text on Doctor Modal Page ", async () => {

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

        await expect(errorName).to.be.equal('Enter valid name', `Valid Error name message doesnt exist`);
        await expect(errorEmail).to.be.equal('Enter valid email', `Valid Error email message doesnt exist`);
        await expect(errorPhone).to.be.equal('Enter valid mobile number', `Valid Error mobile message doesnt exist`);
        await expect(errorEducation).to.be.equal('Enter valid education', `Valid Error education message doesnt exist`);

    });
});
