import mongoose from 'mongoose'

export default class {
  constructor(config = {}) {
    const host = config.host || '127.0.0.1'
    const port = config.port || '27017'
    const db = config.db || 'guide'

    this.url = `mongodb://${host}:${port}/${db}`
    this.Mongo = null
  }

  connect() {
    const self = this
    return new Promise((resolve, reject) => {
      self.Mongo = mongoose.connect(self.url, (err) => {
        if (!err) {
          resolve(true)
        } else {
          reject(err)
        }
      })
    })
  }

  disconnect() {
    const self = this
    return new Promise((resolve, reject) => {
      mongoose.connection.close((err) => {
        if (err) {
          reject(err)
        } else {
          self.Mongo = null
          resolve(true)
        }
      })
    })
  }
}
