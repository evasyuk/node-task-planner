import ScheduleItem from "../models/ScheduleItem";

import admin from "firebase-admin"

export default class StoreHelper {
    static store: admin.firestore.CollectionReference

    static init(store: admin.firestore.Firestore) {
        StoreHelper.store = store.collection('/scheduleItems')
    }
    static addOne = async (webhook: string, scheduledDate: string, repeatMode: string) => {
        const item = new ScheduleItem(webhook, scheduledDate, repeatMode)
        if (!item.validate()) {
            console.log('StoreHelper addOne', 'item is not valid', 'aborting')
        } else {
            const result: admin.firestore.DocumentReference = await StoreHelper.store.add(item.toJSON())

            return result.id
        }

        return null
    }

    static removeOne = (docId: string) => {
        return StoreHelper.store.doc(docId).delete()
    }

    static getAllInRange = async () : Promise<any>  => {
        const snapshot: admin.firestore.QuerySnapshot<any> = await StoreHelper.store.orderBy("scheduledDate").get()

        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        }

        const items: object[] = []

        snapshot.forEach((doc: admin.firestore.QueryDocumentSnapshot) => {
            // console.log('doc', doc.data())
            items.push(doc.data())
        })

        // @ts-ignore
        return items.map((item: object) => new ScheduleItem(...item))
    }
}
