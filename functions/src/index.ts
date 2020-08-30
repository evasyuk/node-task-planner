import * as functions from "firebase-functions";
import { appV1 } from "./v1";
import { handler60minutes } from "./schedule";

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

const v1 = functions.https.onRequest(appV1);

const scheduleHalfAnHour = functions.pubsub
    .schedule('every 60 minutes')
    .onRun(handler60minutes);

export {
    v1,
    scheduleHalfAnHour,
}
