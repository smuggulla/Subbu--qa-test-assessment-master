@searchError @smoke @regression @e2e
Feature: Search for a Invlid character /planet
    As a user
    I search the charcter/planet which is not valid
    So that I should not see any details in search results


    Scenario Outline: Search invalid character name or planet
        Given I navigate to homepage
        And I select "<Search Selection>" to search
        When I search for "<Name>" name
        And I click submit button
        Then I should only see "<people count>" characters
        And I should see "Not found." message



        Examples:
            | Name              | Search Selection | people count |
            | Jarrod Johnston | people           | 0            |
            | Selaucami         | planet           | 0            |