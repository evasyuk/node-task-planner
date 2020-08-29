import * as functions from 'firebase-functions';

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

import { getAppV1 } from './v1'

// const { getAppV1 } = require('./v1');
const v1 = functions.https.onRequest(getAppV1());

export {
    v1,
}
