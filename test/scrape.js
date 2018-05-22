/* globals test */

const {deepEqual} = require('assert')

const scrape = require('../lib/scrape')

test('scrapes bitcoin historic data for May 1st, 2018', (done) => {
  scrape('bitcoin', '20180501', '20180501').then(historic => {
    deepEqual(historic, [{
      'time': 1525125600000,
      'open': 9251.47,
      'high': 9255.88,
      'low': 8891.05,
      'close': 9119.01,
      'volume': '7,713,020,000'
    }])

    done()
  })
})
