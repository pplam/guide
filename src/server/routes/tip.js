import Router from 'koa-router'

export default (app, dal) => {
  const router = new Router()

  router.get('/categories', async (ctx) => {
    const cates = await dal.tip.findAllcategories()
    ctx.status = 200
    ctx.body = cates
  })

  router.get('/titles/:category?', async (ctx) => {
    // const page = ctx.query.page
    // const limit = ctx.query.limit
    const pagination = {
      page: parseInt(ctx.query.page, 10),
      limit: parseInt(ctx.query.limit, 10),
    }
    // const search = ctx.query.search
    // const cate = ctx.params.category
    const query = {
      search: ctx.query.search,
      category: ctx.params.category,
    }
    const titles = await dal.tip.findEntries({ query, pagination })
    ctx.status = 200
    ctx.body = titles
  })

  router.get('/subtitles/:title', async (ctx) => {
    const title = ctx.params.title
    const subtitles = await dal.tip.findSubtitlesByTitle(title)
    ctx.status = 200
    ctx.body = subtitles
  })
  app.use(router.routes())
  app.use(router.allowedMethods())
}
