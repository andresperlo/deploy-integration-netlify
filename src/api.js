const serverless = require('serverless-http');
const app = require('../backend-submodule/src/app').createApp('/.netlify/functions');

exports.handler = serverless(app)