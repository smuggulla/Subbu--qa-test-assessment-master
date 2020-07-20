import {BasePage} from '../pageObjects/basePage.po';
import { browser, protractor } from 'protractor';
import { Given, When, Then } from 'cucumber';
const chai = require('chai');
chai.use(require('chai-as-promised'));

const searchForm = new BasePage();

Given('I navigate to homepage', async () => {
    await browser.get('/');
   });

When('I search for {string} name', async (name) => {
    await searchForm.searchTextbox().sendKeys(name);
});

When('I clear the search form', async () => {
    await searchForm.searchTextbox().clear().then(function () {
        browser.pause();
    });
});
When('I press enter button', async () => {
    await searchForm.searchBtn().sendKeys(protractor.Key.ENTER);
});

When('I click submit button', async () => {
    await searchForm.searchBtn().click();
});

Given('I select {string} to search', async function (selection) {
    switch (selection) {
        case 'people':
            await searchForm.peopleRadioBtn().click();
            break;
            case 'planet':
            await searchForm.planetsRadioBtn().click();
            break;
        }
    });

Then('I should see {string} message', async function (expectedError) {
    const searchMsg = await searchForm.searchError().getText();
    chai.expect(expectedError).to.equal(searchMsg, 'Invalid search message should match with expected but result is not same');

  });


