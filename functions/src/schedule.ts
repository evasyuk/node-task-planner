import axios from "axios";

import { EventContext } from "firebase-functions";
import StoreHelper from "./helpers/StoreHelper";
import ScheduleItem from "./models/ScheduleItem";

export const handler60minutes = async (context : EventContext) => {
    const now : Date = new Date()
    console.log('This will be run every 60 minutes!', `${now.getHours()}:${now.getMinutes()}`);

    const items : ScheduleItem[] = await StoreHelper.getAllInRange()

    items.forEach((item: ScheduleItem) => {
        axios.get(item.webhook)
            .then((response: any) => {
                console.log('response', response)
            })
            .catch((error : Error) => {
                console.log('error')
            })
    })

    return null;
}
