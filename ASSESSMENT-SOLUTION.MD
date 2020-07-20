# QA Engineer Assessment Solution

## Introduction

Use this file to document your solution and findings.

Name: Subbu Muggulla and 
Contact information : 
    Email :subbumuggulla@gmail.com
    Number : +44 7803398225

## Remarks 

1. Fixed the below error by updating the  @angular-devkit version in package.json
  Schema validation failed with the following errors:
  Data path ".builders['app-shell']" should have required property 'class'.

2. Added Cucumber pretty report and will generate and opens in browser after execution completes.

3. Added test IDs for below app components in src/app folder
   - character.component.html
   - planet.component.html
   - search-form.component.html
   - app.component.html
4. Refactored/created page objects for searchForm(base page),people search,planet search. People and search pages inherit from base search form.
5. Some  additional flows were added to  existing feature files and created separate featre file for clear search and switch search.
6. Created people,planet and search form step definitions separately.
7. Updated protractor.conf file with below changes
  - updated step definitions path in cucumberOpts
  - Added frameworkPath 
  - Added protractor-multiple-cucumber-html-reporter-plugin
  - Added base url for dev env(We can create protractor.conf files for other environments and can run same features without modifying environment url).

8. Two node modules were added to package.json
   - "protractor-cucumber-framework": "~6.2.0"
   - "protractor-multiple-cucumber-html-reporter-plugin": "^1.8.1"
9. Cucumber html report will be generated in ../e2e/test-reports/report/ folder.

## Bugs 
*	When you search for either a character or a planet and you get one or more results for it, clear the “Search form” and hit the Search button again, you should then get an empty result list (previous search results are removed).

  - Clear Search resuts test scenarios failed (This functionality is not working and not getting the empty results i.e previour search results were not removed in people and planet.)
  - Nothing is displayed when try to search with empty value in search-form for people and planet.
  - Seen UNKNOWN values for all fields (population,climate and gravity) for some of the planets (Not sure about expected values).
...
