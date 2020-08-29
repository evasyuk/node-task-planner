const express = require("express")

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

    appV1.get("schedule", (request, response) => {
        response.send("/schedule");
    });

    appV1.get("unschedule", (request, response) => {
        response.send("/unschedule");
    });

    appV1.get("unschedule/all", (request, response) => {
        response.send("/unschedule/all");
    });

    return appV1
}

exports.getAppV1 = getAppV1
