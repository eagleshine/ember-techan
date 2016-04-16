/* globals blanket, module */

var options = {
  modulePrefix: 'ember-techan',
  filter: '//.*ember-techan/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    lcovOptions: {
      outputFile: 'lcov.info',

      // automatically skip missing files, relative to project's root dir
      //excludeMissingFiles: true // default false
    },
    reporters: ['json', 'lcov'],
    autostart: true
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
