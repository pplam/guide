import Router from 'koa-router'

export default (app, dal) => {
  const router = new Router()

  router.get('/categories', async (ctx) => {
    const cates = await dal.tip.findCategories()
    ctx.status = 200
    ctx.body = cates
  })

  router.get('/subtitles/:title', async (ctx) => {
    const title = ctx.params.title
    const subtitles = await dal.tip.findSubtitlesByTitle(title)
    ctx.status = 200
    ctx.body = subtitles
  })

  router.get('/entry/:id', async (ctx) => {
    const id = ctx.params.id
    const fields = ctx.reqData.pagination.select
    const entry = await dal.tip.findById(id, fields)
    ctx.status = 200
    ctx.body = entry
  })

  router.get('/entries/:category?', async (ctx) => {
    if (ctx.params.category) {
      ctx.reqData.query.category = ctx.params.category
    }
    const entries = await dal.tip.findEntries(ctx.reqData)
    ctx.status = 200
    ctx.body = entries
  })

  app.use(router.routes())
  app.use(router.allowedMethods())
}
