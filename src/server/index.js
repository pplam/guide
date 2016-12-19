import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import cors from 'koa-cors'
import Router from 'koa-router'

import Dal from '../dal'
import setupTipRoutes from './routes/tip'
import paramsParser from './middlewares/paramsParser'

export default class {
  constructor(config = {}) {
    this.host = config.app.host || 'localhost'
    this.port = config.app.port || 3000

    this.app = new Koa()
    this.dal = new Dal(config.db)

    this.enableCORS()
    this.app.use(logger())
    this.app.use(bodyParser())

    this.app.use(paramsParser())
    this.initRouter()
    setupTipRoutes(this.app, this.dal)
  }

  initRouter() {
    const router = new Router()
    router.get('/health', async (ctx) => {
      ctx.status = 200
      ctx.body = 'ok!'
    })
    this.app.use(router.routes())
    this.app.use(router.allowedMethods())
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
}
