import Router from 'koa-router'

export default (app, dal) => {
  const router = new Router()

  router.get('/categories', async (ctx) => {
    const cates = await dal.tip.findAllcategories()
    ctx.status = 200
    ctx.body = cates
  })

  app.use(router.routes())
  app.use(router.allowedMethods())
}
