export default async (ctx, next) => {
    ctx.body = { msg: "Set new task stub" }

    await next()
}