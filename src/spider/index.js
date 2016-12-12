import Crawler from './crawler'
import DB from '../dal/db'
import schemas from '../dal/schemas'

export default class {
  constructor(config = {}) {
    this.db = new DB(config.db)
    this.crawler = new Crawler(config.scrapeUrl)
  }

  async start() {
    await this.crawler.init()
    const tips = await this.crawler.start()

    await this.db.connect()
    const Tip = this.db.Mongo.model('Tip', schemas.tip)
    await Tip.insertMany(tips)
  }

  async stop() {
    await this.crawler.stop()
    await this.db.disconnect()
  }
}
