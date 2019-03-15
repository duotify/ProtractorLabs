// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 110000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  multiCapabilities: [
    { browserName: 'firefox' },
    {	browserName: 'chrome' },
    { browserName: 'internet explorer', version: '11' }
  ],
  directConnect: false,
  seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
  localSeleniumStandaloneOpts: {
    jvmArgs: ['-Dwebdriver.ie.driver=./node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.141.5.exe']},
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
