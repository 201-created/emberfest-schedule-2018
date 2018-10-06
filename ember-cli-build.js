'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const broccoliAssetRevDefaults = require( 'broccoli-asset-rev/lib/default-options' );

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    babel: {
      loose: true
    },
    'asset-cache': {
      include: [
        'assets/**/*',
        'icons/**/*',
        'manifest.webmanifest'
      ]
    },
    'ember-inline-css': {
      filter: [
        '/assets/vendor.css',
        '/assets/emberfest.css'
      ]
    },
    'ember-service-worker': {
      registrationStrategy: 'inline',
      versionStrategy: 'project-revision'
    },
    fingerprint: {
      extensions: broccoliAssetRevDefaults.extensions.concat(['webmanifest']),
      prepend: 'https://dehqs5in8mnb0.cloudfront.net/'
    },
    prember: {
      urls: [
        '/'
      ]
    },
    vendorFiles: {
      'jquery.js': null
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
