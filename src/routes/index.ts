import * as Router from "koa-router"
import Hello from './Hello'
import SetNewTask from "./SetNewTask"

const router = new Router()

router.get("/hello", Hello)
router.post("/set/one", SetNewTask)

const getAllRoutes = (app) => {
    // Routes
    app.use(router.routes()).use(router.allowedMethods())
}

export default getAllRoutes