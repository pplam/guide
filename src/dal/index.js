import DB from './db'
import Tip from './Tip'
import schemas from './schemas'

export default class {
  constructor(config = {}) {
    this.db = new DB(config)
    this.tip = null
  }

  async init() {
    await this.db.connect()
    const tipModel = this.db.Mongo.model('Tip', schemas.tip)
    this.tip = new Tip(tipModel)
  }
}
