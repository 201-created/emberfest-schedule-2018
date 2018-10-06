/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "EmberFest",
    short_name: "EmberFest",
    description: "EmberFest 2018 Schedule",
    start_url: "https://d3ojrcukkcukke.cloudfront.net/",
    display: "standalone",
    background_color: "#f2f2f1",
    theme_color: "#e15d44",
    icons: [
      {
        src: '/icons/192.png',
        sizes: '192x192'
      },
      {
        src: '/icons/512.png',
        sizes: '512x512'
      },
      {
        src: '/icons/280.png',
        sizes: '280x280',
        targets: ['apple']  // non-standard property
      },
      {
        src: '/icons/favicon.png',
        sizes: '32x32',
        targets: ['favicon']
      }
    ],
    apple: {
      statusBarStyle: 'black-translucent'
    },
    ms: {
      tileColor: '#f2f2f1'
    }
  };
}
