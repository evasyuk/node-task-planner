import express from "express";
import StoreHelper from "./helpers/StoreHelper";

const app = express()

app.use((request, response, next) => {
  console.log('request path', request.path)
  next()
})

app.route("/schedule")
  .get((request, response) => {
    response.send("/schedule");
  })
  .post(async (request, response) => {
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
  app,
}
