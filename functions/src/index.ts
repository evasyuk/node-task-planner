import * as functions from "firebase-functions";
import { appV1 } from "./v1";
import { handler60minutes } from "./schedule";

// The Firebase Admin SDK to access Cloud Firestore.
import admin from "firebase-admin"
import StoreHelper from "./helpers/StoreHelper";

admin.initializeApp({
    credential: admin.credential.cert('./firebase-adminsdk.json'),
    databaseURL: process.env.DB_URL,
});

StoreHelper.init(admin.firestore())

const v1 = functions.https.onRequest(appV1);

const scheduleHalfAnHour = functions.pubsub
    .schedule('every 60 minutes')
    .onRun(handler60minutes);

export {
    v1,
    scheduleHalfAnHour,
}
