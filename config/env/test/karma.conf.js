// #docregion
module.exports = function(config) {

  var appBase    = 'app/';       // transpiled app JS and map files
  var appSrcBase = 'dist/app/';       // app source TS files

  config.set({
    basePath: '../../../',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-mocha-reporter'),
      require('karma-jasmine-html-reporter'), // click "Debug" in browser to see it
      require('karma-htmlfile-reporter') // crashing w/ strange socket error
    ],

    customLaunchers: {
      // From the CLI. Not used here but interesting
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    files: [
      // System.js for module loading
      'node_modules/systemjs/dist/system.src.js',

      // Polyfills
      'node_modules/core-js/client/shim.min.js',
      'node_modules/reflect-metadata/Reflect.js',

      // zone.js
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs
      {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},

      // Paths loaded via module imports:
      // Angular itself
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},

      // External Libraries
      {pattern: 'node_modules/redux/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/ng2-redux/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/immutable/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/ng2-cookies/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/lodash/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/socket.io-client/**/*.js', included: false, watched: false},

      {pattern: 'config/env/development/systemjs.config.js', included: false, watched: false},
      {pattern: 'config/env/test/systemjs.config.extras.js', included: false, watched: false},
      'config/env/test/karma-test-shim.js',

      // transpiled application & spec code paths loaded via module imports
      {pattern: appSrcBase + '**/**/*.js', included: false, watched: true},

      // Asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: appSrcBase + '**/**/*.html', included: false, watched: true},
      {pattern: appSrcBase + '**/**/*.css', included: false, watched: true},

      // Paths for debugging with source maps in dev tools
      {pattern: appBase + '**/**/*.ts', included: false, watched: false},

      // Assets
      {pattern: appSrcBase + 'assets/*.jpg', included: false, watched: false},
      {pattern: appSrcBase + 'assets/*.png', included: false, watched: false}
    ],

    // Proxied base paths for loading assets
    proxies: {
      // required for component assets fetched by Angular's compiler
      '/assets/': '/base/dist/app/assets/',
      '/api/': 'http://localhost:7001/api/'
    },

    exclude: [],
    preprocessors: {},
    // disabled HtmlReporter; suddenly crashing w/ strange socket error
    reporters: ['kjhtml', 'mocha'],//'html'],

    // HtmlReporter configuration
    htmlReporter: {
      // Open this file to see results in browser
      outputFile: '_test-output/tests.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: __dirname
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
