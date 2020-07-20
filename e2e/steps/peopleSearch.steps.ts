import { Given, When, Then } from 'cucumber';
import {SearchPeople} from '../pageObjects/searchPeople.po';
import { ɵConsole } from '@angular/core';

const searchPpl = new SearchPeople();
const chai = require('chai');
chai.use(require('chai-as-promised'));


Then('I should only see {string} characters', async (pplCount) => {
  const expectedCount = Number(pplCount);
  await searchPpl.charactersList().count().then(function (count) {
  chai.expect(expectedCount).to.equal(count, 'Search results should only display as per expected but mismatching results');

});

});

Then('I should see {string} details {string} ,{string},{string},{string}', async function (expectedName, expectedGender, expectedBirthYear,
expectedEyeColor, expectedSkinColor) {

const name = await searchPpl.name().get(0).getText();
const birthyear = await searchPpl.BirthYear().get(0).getText();
const gender = await searchPpl.gender().get(0).getText();
const eyeColor = await searchPpl.eyeColor().get(0).getText();
const skinColor = await searchPpl.skinColor().get(0).getText();

chai.expect(expectedName).to.equal(name, 'Character Name should match with expected but result is not same');
chai.expect(expectedGender).to.equal(gender, 'Character Gender should match with expected but result is not same');
chai.expect(expectedBirthYear).to.equal(birthyear, 'Character Birth year should match with expected but result is not same');
chai.expect(expectedEyeColor).to.equal(eyeColor, 'Character eye color should match with expected but result is not same');
chai.expect(expectedSkinColor).to.equal(skinColor, 'Character Skin color should match with expected but result is not same');
});

Then('I should have the following details for all {string} characters', async function (totalCharacters, dataTable) {
  const noOfCharacters = Number(totalCharacters);
  const expectedfields = dataTable.hashes();
    for (let i = 0; i < expectedfields.length; i++) {
       const field = expectedfields[i].FieldName;
        for (let j = 0; j < noOfCharacters; j++) {
        switch (field) {
        case 'Name':

          const name = await searchPpl.name().get(j).getText();
          console.log('=======' + name);

          const nameCheck = chai.expect(name).to.not.be.null;
          break;
          case 'Gender':
            const gender = await searchPpl.gender().get(j).getText();
            const genderCheck = chai.expect(gender).to.not.be.null;
            break;
            case 'BirthYear':
              const year = await searchPpl.BirthYear().get(j).getText();
              const yearCheck = chai.expect(year).to.not.be.null;
              break;
          case 'EyeColor':
            const eyeColor = await searchPpl.eyeColor().get(j).getText();
            const eyeCheck = chai.expect(eyeColor).to.not.be.null;
            break;
          case 'SkinClor':
            const skinColor = await searchPpl.skinColor().get(j).getText();
            const skinCheck = chai.expect(skinColor).to.not.be.null;
            break;
          }
        }
      }

    });
