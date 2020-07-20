// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  debug: false,
  allScriptsTimeout: 30000,
  specs: [
    './e2e/features/*.feature'
    
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    require: ['./e2e/steps/*.steps.ts'],  
    tags: [],                      
    strict: true,                  
    format:'json:e2e/test-reports/cucumber-test-results.json',     
    'dry-run': false,              
    compiler: []                   
  },

 onPrepare: function () {
  require('ts-node').register({
    project: require('path').join(__dirname, './e2e/tsconfig.e2e.json')
  });  
  browser.manage().window().maximize(); 
  },

  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options:{
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
        openReportInBrowser: true
    }

}]
    
};
