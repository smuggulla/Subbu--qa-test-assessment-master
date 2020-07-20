@searchPerson @smoke @regression @e2e
Feature: Search for a Star Wars character(person)
    As a user
    I should be able to search by Star Wars character full names or partial names
    So that I can see his / her details


    Scenario Outline: Search by character full name by pressing enter button
        Given I navigate to homepage
        And I select "<Search Selection>" to search
        When I search for "<Name>" name
        And I press enter button
        Then I should only see "<people count>" characters
        Then I should see "<Name>" details "<Gender>" ,"<BirthYear>","<EyeColor>","<SkinClor>"



        Examples:
            | Name               | Gender | BirthYear | EyeColor | SkinClor | Search Selection | people count |
            | Luke Skywalker     | male   | 19BBY     | blue     | fair     | People           | 1            |
            | Beru Whitesun lars | female | 47BBY     | blue     | light    | People           | 1            |


    Scenario Outline: Search by character last name (partial) by clicking submit button
        Given I navigate to homepage
        And I select "<Search Selection>" to search
        When I search for "<Name>" name
        And I click submit button
        Then I should only see "<people count>" characters
        And I should have the following details for all "<people count>" characters
            | FieldName |
            | Name      |
            | Gender    |
            | BirthYear |
            | EyeColor  |
            | SkinClor  |



        Examples:
            | Name | Gender | BirthYear | EyeColor | SkinClor | Search Selection | people count |
            | lars | male   | 19BBY     | blue     | fair     | People           | 3            |
