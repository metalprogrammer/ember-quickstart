/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here 
    'ember-cli-foundation-6-sass': {
      'foundationJs': 'all'
    }
  });
 
  return app.toTree();
};