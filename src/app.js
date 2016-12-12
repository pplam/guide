import Server from './server'
import config from '../config.json'

(async () => {
  try {
    const server = new Server(config)
    await server.start()
  } catch (e) {
    console.log(e.stack)
  }
})()
