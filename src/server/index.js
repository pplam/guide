import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import cors from 'koa-cors'

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
