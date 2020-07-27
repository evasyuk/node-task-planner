import * as Router from "koa-router"
import Hello from './Hello'

const router = new Router()

// Hello world
router.get("/hello", Hello)

const getAllRoutes = (app) => {
    // Routes
    app.use(router.routes()).use(router.allowedMethods())
}

export default getAllRoutes