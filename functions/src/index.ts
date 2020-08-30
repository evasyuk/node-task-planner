import * as functions from 'firebase-functions';
import { appV1 } from './v1'

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

const v1 = functions.https.onRequest(appV1);

export {
    v1,
}
