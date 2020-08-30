import { EventContext } from "firebase-functions";

export const handler60minutes = (context : EventContext) => {
    const now : Date = new Date()
    console.log('This will be run every 60 minutes!', `${now.getHours()}:${now.getMinutes()}`);
    return null;
}
