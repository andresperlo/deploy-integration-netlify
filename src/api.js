const serverless = require('serverless-http');
const app = require('../backend-submodule/src/api').createApp('/.netlify/functions');

exports.handler = serverless(app)