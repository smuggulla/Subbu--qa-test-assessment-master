import { Given, When, Then } from 'cucumber';
import {SearchPlanet} from '../pageObjects/searchPlanet.po';
import { ɵConsole } from '@angular/core';

const searchPlt = new SearchPlanet();
const chai = require('chai');
chai.use(require('chai-as-promised'));

Then('I should see {string} planet {string} ,{string},{string} details', async function (expectedName, expectedPopulation, expectedClimate,
expectedGravity) {

const name = await searchPlt.name().get(0).getText();
const population = await searchPlt.population().get(0).getText();
const climate = await searchPlt.climate().get(0).getText();
const gravity = await searchPlt.gravity().get(0).getText();

chai.expect(expectedName).to.equal(name, 'Planet Name should match with expected but result is not same');
chai.expect(expectedPopulation).to.equal(population, 'Planet population should match with expected but result is not same');
chai.expect(expectedClimate).to.equal(climate, 'Planet climate  should match with expected but result is not same');
chai.expect(expectedGravity).to.equal(gravity, 'planet gravity should match with expected but result is not same');
});


Then('I should only see {string} planets', async function (PlntCount) {
const expectedCount = Number(PlntCount);
await searchPlt.planetsList().count().then(function (count) {
chai.expect(expectedCount).to.equal(count);

});
});

Then('I should have the following details for all {string} planets', async function (noOfPlanets, dataTable) {
  const planetsCount = Number(noOfPlanets);
  const expectedfields = dataTable.hashes();
    for (let i = 0; i < expectedfields.length; i++) {
       const field = expectedfields[i].FieldName;
        for (let j = 0; j < planetsCount; j++) {
          switch (field) {
            case 'Name':

            const name = await searchPlt.name().get(j).getText();
            const nameCheck = chai.expect(name).to.not.be.null;
            break;
            case 'Population':
              const gender = await searchPlt.population().get(j).getText();
              const populationCheck = chai.expect(gender).to.not.be.null;
            break;
            case 'Climate':
              const year = await searchPlt.climate().get(j).getText();
              const climateCheck = chai.expect(year).to.not.be.null;
              break;
            case 'Gravity':
              const eyeColor = await searchPlt.gravity().get(j).getText();
              const gravityCheck = chai.expect(eyeColor).to.not.be.null;
              break;
          }
        }
    }
});

