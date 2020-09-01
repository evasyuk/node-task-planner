export default class ScheduleItem {
    webhook: string;
    scheduledDate: string;
    repeatMode: string;
    cuid: string | undefined | null;
    uid: string | undefined | null;

    scheduledDateNumber: number;

    constructor(webhook: string, scheduledDate: string, repeatMode: string, cuid?: string) {
        this.webhook = webhook
        this.scheduledDate = scheduledDate
        this.repeatMode = repeatMode
        this.cuid = cuid

        this.scheduledDateNumber = 0
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
            scheduledDateNumber: this.scheduledDateNumber,
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