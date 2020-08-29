const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

const { getAppV1 } = require('./v1');
const v1 = functions.https.onRequest(getAppV1(functions));

module.exports = {
    v1
};
