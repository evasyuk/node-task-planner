import axios from "axios";

import StoreHelper from "./helpers/StoreHelper";

const handler60minutes = async () => {
    const now = new Date()
    console.log('This will be run every 60 minutes!', `${now.getHours()}:${now.getMinutes()}`);

    const items = await StoreHelper.getAllInRange()

    items.forEach((item) => {
        axios.get(item.webhook)
            .then((response) => {
                console.log('response', response)
            })
            .catch((error) => {
                console.log('error')
            })
    })

    return null;
}

export {
    handler60minutes,
}