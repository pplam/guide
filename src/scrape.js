import 'babel-polyfill'
import Spider from './spider'
import config from '../config.json'

(async () => {
  try {
    const spider = new Spider(config)
    await spider.start()
  } catch (e) {
    console.log(e.stack)
  }
  console.log('Done!')
})()
