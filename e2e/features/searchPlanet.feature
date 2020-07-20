@searchPlanet @smoke @regression @e2e
Feature: Search for a Star Wars planet
    As a user
    I should be able to search by Star Wars planet full names or partial names
    So that I can see planet details


    Scenario Outline: Search by planet full name
        Given I navigate to homepage
        And I select "<Search Selection>" to search
        When I search for "<Name>" name
        And I click submit button
        Then I should only see "<planets count>" planets
        Then I should see "<Name>" planet "<Population>" ,"<Climate>","<Gravity>" details

        Examples:
            | Name     | Population | Climate   | Gravity    | Search Selection | planets count |
            | Alderaan | 2000000000 | temperate | 1 standard | planet           | 1             |
            | Mustafar | 20000      | hot       | 1 standard | planet           | 1             |


    Scenario Outline: Search by planet partial name
        Given I navigate to homepage
        And I select "<Search Selection>" to search
        When I search for "<Name>" name
        And I press enter button
        Then I should only see "<planets count>" planets
        And I should have the following details for all "<planets count>" planets
            | FieldName  |
            | Name       |
            | Population |
            | Climate    |
            | Gravity    |

        Examples:
            | Name | Search Selection | planets count |
            | da   | planet           | 5             |
