@switchsearch @e2e
Feature: Search not found when switch from planet to people
    As a user
    I search the planet which is valid name and I see the search results
    I switch from planet to people and search with same name
    So that I should not see any details in search results


    Scenario Outline: Search by planet full name and switch to people to search with same name
        Given I navigate to homepage
        And I select "<Search Selection>" to search
        When I search for "<Name>" name
        And I click submit button
        Then I should only see "<planets count>" planets
        Then I should see "<Name>" planet "<Population>" ,"<Climate>","<Gravity>" details
        And I select "people" to search
        And I press enter button
        Then I should only see "0" characters
        And I should see "Not found." message

        Examples:
            | Name    | Population | Climate | Gravity | Search Selection | planets count |
            | Dagobah | unknown    | murky   | N/A     | planet           | 1             |

