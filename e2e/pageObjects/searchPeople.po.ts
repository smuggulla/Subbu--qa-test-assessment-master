import {element, by, browser } from 'protractor';
import {BasePage} from './basePage.po';
/**
 * This Class representing Star wars people search page .
 *
 * @export
 * @class searchPeople
 */
 export class SearchPeople extends BasePage {

     charactersList() {
        return element.all(by.css('[data-test-id="people-card"]'));
    }

    name() {
        return element.all(by.css('div h6'));
    }
    gender() {
        return element.all(by.css('[data-test-id="gender"]'));
    }
    BirthYear() {
        return element.all(by.css('[data-test-id="birth_year"]'));
    }
    eyeColor() {
        return element.all(by.css('[data-test-id="eye_color"]'));
    }
    skinColor() {
        return element.all(by.css('[data-test-id="skin_color"]'));
    }
}




