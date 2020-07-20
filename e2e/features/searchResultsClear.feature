@searchresults @e2e
Feature: Clear Search resuts
    As a user
    I should be able to search by Star Wars character full names or partial names and I can see his / her details
    I clear the search form and search
    So that I should then get an empty result list (previous search results are removed).

    Scenario Outline: Search by character full name and clear search results
        Given I navigate to homepage
        And I select "<Search Selection>" to search
        When I search for "<Name>" name
        And I press enter button
        Then I should only see "<people count>" characters
        Then I should see "<Name>" details "<Gender>" ,"<BirthYear>","<EyeColor>","<SkinClor>"
        And I clear the search form
        And I press enter button
        Then I should only see "0" characters


        Examples:
            | Name           | Gender | BirthYear | EyeColor | SkinClor | Search Selection | people count |
            | Luke Skywalker | male   | 19BBY     | blue     | fair     | People           | 1            |


    Scenario Outline: Search by planet partial name and clear search results
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
        And I clear the search form
        And I press enter button
        Then I should only see "0" planets

        Examples:
            | Name | Search Selection | planets count |
            | da   | planet           | 5             |

