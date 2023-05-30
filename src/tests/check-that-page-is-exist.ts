
import { expect, assert } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import { page as pages } from '@pages';

describe("Test suite", () => {

    beforeEach(async () => {
        await pages('dashboard').open();
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
        await expect(defaultViewEl).to.be.equal('Default View', `Default View text doesnt exist on the preference page`);

        const calendarStartTimeEl = await pages('preference').preferenceControl.label('startTime').getText();
        await expect(calendarStartTimeEl).to.be.equal('Calendar Start Time', `Calendar Start Time text doesnt exist on the preference page`);

        const calendarEndTimeEl = await pages('preference').preferenceControl.label('endTime').getText();
        await expect(calendarEndTimeEl).to.be.equal('Calendar End Time', `Calendar End Time text doesnt exist on the preference page`);

        const slotDurationEl = await pages('preference').preferenceControl.label('duration').getText();
        await expect(slotDurationEl).to.be.equal('Slot Duration', `Slot Duration text doesnt exist on the preference page`);

    });

    it("Verify that the Patients page exists and contains the List of Patients", async () => {

        // Open the page
        // Verify that the List of patients exists

        await pages('dashboard').sideMenu.item('patients').waitAndClick();

        const listItems = await $$('[aria-rowindex]');
        expect(listItems).to.be.a('array', `patient list is not an array`).to.have.length(7, `patient list is not have length 7`);
    });

});
