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
      excludeMissingFiles: true, // default false

      // provide a function to rename es6 modules to a file path
      renamer: function (moduleName) {
        // return a falsy value to skip given module
        if (moduleName === 'unwanted') {
          return;
        }

        var expression = /^ember-techan/;
        return moduleName.replace(expression, 'app') + '.js';
      }
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
