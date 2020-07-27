import * as logger from "koa-logger"
import * as json from "koa-json"

const applyMiddlewares = (app) => {

// Middlewares
    app.use(json())
    app.use(logger())
}

export default applyMiddlewares