import Router from 'koa-router'

export default (app, dal) => {
  const router = new Router()

  router.get('/categories', async (ctx) => {
    const cates = await dal.tip.findAllcategories()
    // console.log('Entering router') // test health
    console.log('Query results:')
    console.log(cates)
    ctx.status = 200
    ctx.body = cates
    // ctx.body = JSON.stringify({
    //   cates,
    // })
    // ctx.body = 'ok!'
  })

  app.use(router.routes())
  app.use(router.allowedMethods())
}
