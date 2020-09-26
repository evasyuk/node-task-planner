const functions = require('firebase-functions');

process.env.BABEL_DISABLE_CACHE = '1'
require("@babel/register")({
    extends: './.babelrc',
    ignore: [/node_modules/, /.png/],
    extensions: [".stub.js", ".js"],
  })
require('@babel/polyfill')
const app = require('./src/App').app
const handler60minutes = require('./src/schedule').handler60minutes

exports.api = functions.https.onRequest(app);

exports.schedule = functions.pubsub
  .schedule('every 60 minutes')
  .onRun(handler60minutes);

exports.info = functions.https.onRequest((req, res) => {
  res.send("/info");
});
