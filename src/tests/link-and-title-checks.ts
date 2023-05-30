
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import { page as pages } from '@pages';

describe("Check Links and Titles", () => {

    beforeEach(async () => {
        await pages('dashboard').open();
    });

    it("Verify that the Title exists", async () => {

        // Open the page
        // Verify that the Title exists

        const getTitle = await browser.getTitle();
        expect(getTitle).to.be.equal('Appointment Planner - Syncfusion Angular Components Showcase App', `title name doesnt equal title name`);

    });

    it("Verify that the Link contains a text", async () => {

        // Open the page
        // Verify that the Link contains a text
        const mainUrl = await browser.getUrl();

        expect(mainUrl).to.include('showcase', `Url dosent contain 'showcase' text`);

    });

});
