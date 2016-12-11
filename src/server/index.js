import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import cors from 'koa-cors'
// import Router from 'koa-router' // test routes

import Dal from '../dal'
import setupTipRoutes from './routes/tip'

export default class {
  constructor(config = {}) {
    this.host = config.app.host || 'localhost'
    this.port = config.app.port || 3000

    this.app = new Koa()
    this.dal = new Dal(config.db)

    this.enableCORS()
    this.app.use(logger())
    this.app.use(bodyParser())
    // const router = new Router()
    // router.get('/health', (ctx) => {
    //  // TODO: check db connection
    //   ctx.body = 'ok'
    // })

    // const router = this.initRoutes()
    // this.app.use(router.routes())
    // this.app.use(router.allowedMethods())
    // this.app.use(router.routes()).use(router.allowedMethods()) // test routes
    // this.app.use(async (ctx, next) => {
    //   ctx.body = 'ok'
    //   next()
    // })

    setupTipRoutes(this.app, this.dal)
  }

  enableCORS() {
    const options = {
      origin: '*',
    }
    this.app.use(cors(options))
  }

  async start() {
    try {
      await this.dal.init()
      // setupTipRoutes(this.app, this.dal)
      // console.log(this.dal)
      // console.log(this)
      this._server = await this.app.listen(this.port)
    } catch (e) {
      console.warn(e.stack)
    }
  }

  async stop() {
    try {
      await this.dal.destroy()
    } catch (e) {
      console.warn(e.stack)
    }
    await this._server.close()
  }

  // initRoutes() { // test routes
  //   const router = new Router()
  //   // health check
  //   router.get('/health', (ctx) => {
  //    // TODO: check db connection
  //     ctx.body = 'ok'
  //   })
  //   return router
  // }
}
