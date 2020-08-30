import express from "express";

import ValidationHelper from "./helpers/ValidationHelper";
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
    .post((request : express.Request, response : express.Response) => {
        try {
            ValidationHelper.validateBody(
                {
                    date: 'String',
                    webhook: 'String',
                }, request)

            const date = request.body.date
            const webhook = request.body.webhook

            const uid = StoreHelper.addOne(date, webhook)
            response.json({ uid })
        } catch (error) {
            console.log(error)
            response.sendStatus(504)
        }
    });



export {
    appV1,
}
