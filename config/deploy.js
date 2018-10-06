/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {},
    pipeline: {
      activateOnDeploy: true
    },
    s3: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,otf,wasm,webmanifest}'
    },
    cloudfront: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    },
    's3-index': {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      filePattern: '{index.html|sw.js}'
    }
  };

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3.bucket = process.env.PRODUCTION_ASSET_BUCKET;
    ENV.s3.region = process.env.PRODUCTION_ASSET_REGION;
    ENV['s3-index'].bucket = process.env.PRODUCTION_INDEX_BUCKET;
    ENV['s3-index'].region = process.env.PRODUCTION_INDEX_REGION;
    ENV.cloudfront.distribution = process.env.PRODUCTION_DISTRIBUTION;
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
