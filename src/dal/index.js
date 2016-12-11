import DB from './db'
import Tip from './Tip'
import schemas from './schemas'

export default class {
  constructor(config = {}) {
    this.db = new DB(config)
    this.dbConnected = false
    this.tip = null
  }

  async init() {
    if (!this.dbConnected) {
      await this._connect()
    }
    const tipModel = this.db.Mongo.model('Tip', schemas.tip)
    this.tip = new Tip(tipModel)
  }

  async destroy() {
    if (this.dbConnected) {
      this._disconnect()
    }
  }

  async _connect() {
    await this.db.connect()
    this.dbConnected = true
  }

  async _disconnect() {
    await this.db.disconnect()
    this.dbConnected = false
  }
}
