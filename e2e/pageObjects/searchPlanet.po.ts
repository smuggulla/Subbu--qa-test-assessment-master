import {element, by, browser } from 'protractor';
import {BasePage} from './basePage.po';

/**
 * This Class representing Star wars planet search page .
 *
 * @export
 * @class searchPlanet
 */
export class SearchPlanet extends BasePage {

    planetsList() {
        return element.all(by.css('[data-test-id="planet-card"]'));
    }

    name() {
        return element.all(by.css('div h6'));
    }
    population() {
        return element.all(by.css('[data-test-id="population"]'));
    }
    climate() {
        return element.all(by.css('[data-test-id="climate"]'));
    }
    gravity() {
        return element.all(by.css('[data-test-id="gravity"]'));
    }
}




