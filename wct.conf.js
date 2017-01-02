const packageJson = require( './package.json' );

const config = {
  testTimeout: 200 * 1000,
  "suites": packageJson.packages.map( ( package ) => `./packages/${package}/index.test.html` ),
  "plugins": {
    "sauce": {
      "disabled": true,
      // See https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
      "browsers": [{
          "browserName": "MicrosoftEdge",
          "platform": "Windows 10",
          "version": "14.14393"
        }, {
          "browserName": "internet explorer",
          "platform": "Windows 7",
          "version": "11.0"
        }, {
          "browserName": "chrome",
          "platform": "Windows 10",
          "version": "54.0"
        },  {
          "browserName": "chrome",
          "platform": "Windows 10",
          "version": "beta"
        }, {
          "browserName": "safari",
          "platform": "macOS 10.12",
          "version": "10.0"
        }
      ]
    }
  }
};

module.exports = config;
