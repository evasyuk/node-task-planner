import ScheduleItem from "../models/ScheduleItem";

export default class StoreHelper {
    static store

    static init(store) {
        StoreHelper.store = store.collection('/scheduleItems')
    }
    static addOne = async (webhook, scheduledDate, repeatMode) => {
        const item = new ScheduleItem(webhook, scheduledDate, repeatMode)
        if (!item.validate()) {
            console.log('StoreHelper addOne', 'item is not valid', 'aborting')
        } else {
            const result = await StoreHelper.store.add(item.toJSON())

            return result.id
        }

        return null
    }

    static removeOne = (docId) => {
        return StoreHelper.store.doc(docId).delete()
    }

    static getAllInRange = async () => {
        const snapshot = await StoreHelper.store.orderBy("scheduledDate").get()

        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        }

        const items = []

        snapshot.forEach((doc) => {
            // console.log('doc', doc.data())
            items.push(doc.data())
        })

        // @ts-ignore
        return items.map((item) => new ScheduleItem(...item))
    }
}
