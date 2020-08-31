export default class ScheduleItem {
    webhook: string;
    scheduledDate: string;
    repeatMode: string;
    cuid: string | undefined | null;
    uid: string | undefined | null;

    constructor(webhook: string, scheduledDate: string, repeatMode: string, cuid?: string) {
        this.webhook = webhook
        this.scheduledDate = scheduledDate
        this.repeatMode = repeatMode
        this.cuid = cuid
    }

    setUID = (uid: string) => {
        this.uid = uid
    }

    validate = () => {
        if (!/(http(s?)):\/\//i.test(this.webhook)) {
            console.log('ScheduleItem validate error at', 'webhook', this.webhook)
            return false
        }

        switch (this.repeatMode) {
            case "everyHour":
                break;
            default:
                console.log('ScheduleItem validate error at', 'repeatMode', this.repeatMode)
                return false
        }

        return  true
    }

    toJSON = () => {
        const data = {
            webhook: this.webhook,
            scheduledDate: this.scheduledDate,
            repeatMode: this.repeatMode,
            cuid: null,
            uid: null,
        }

        // if (this.cuid) {
        //     data.cuid = this.cuid
        // }
        //
        // if (this.uid) {
        //     data.uid = this.uid
        // }

        return data
    }
}