export default async (ctx, next) => {
    ctx.body = { msg: "Hello world!" }

    await next()
}