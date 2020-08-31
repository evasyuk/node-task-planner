import express from "express";

import StoreHelper from "./helpers/StoreHelper";

const appV1 = express()
appV1.use((request: express.Request, response: express.Response, next: express.NextFunction) => {
    console.log('request path', request.path)
    next()
})

appV1.route("/schedule")
    .get((request: express.Request, response: express.Response) => {
        response.send("/schedule");
    })
    .post(async (request : express.Request, response : express.Response) => {
        try {
            const date = request.body.date
            const webhook = request.body.webhook

            console.log('date', date)
            console.log('webhook', webhook)

            const uid = await StoreHelper.addOne(webhook, date,"everyHour")
            response.json({ uid })
        } catch (error) {
            console.log(error)
            response.sendStatus(501)
        }

        return null
    });



export {
    appV1,
}
