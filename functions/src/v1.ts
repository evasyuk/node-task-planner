import ValidationHelper from "./helpers/ValidationHelper";
import StoreHelper from "./helpers/StoreHelper";

// import express from "express";
import express, { Response, Request } from "express";

const getAppV1 = () => {
    const appV1 = express()

    // appV1.use(function (req, res, next) {
    //     if (!req.headers['authorization']) {
    //         console.log('authorization not found')
    //         res.sendStatus(403)
    //     } else {
    //         console.log('authorization found', req.headers['authorization'])
    //         next()
    //     }
    // })

    appV1.get("schedule", (request: Request, response: Response) => {
        response.send("/schedule");
    });

    appV1.post("schedule", (request : Request, response : Response) => {
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

    appV1.get("unschedule", (request: Request, response: Response) => {
        response.send("/unschedule");
    });

    appV1.get("unschedule/all", (request: Request, response: Response) => {
        response.send("/unschedule/all");
    });

    return appV1
}

export {
    getAppV1,
}
