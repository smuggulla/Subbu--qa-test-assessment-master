import { element, by } from 'protractor';

/**
 * This Class representing Star wars search home page .
 *
 * @export
 * @class BasePage
 */
export class BasePage {

    constructor() {}
    searchTextbox() {
        return element(by.id('query'));
    }
      searchBtn() {
        return element(by.css('button'));
    }
     planetsRadioBtn() {
        return element(by.id('planets'));
    }
      peopleRadioBtn() {
        return element(by.id('people'));
    }
      searchTitleText() {
        return element(by.css('div  h1'));
    }
      searchError() {
      return element(by.css('[data-test-id="searchError"]'));
    }


}





