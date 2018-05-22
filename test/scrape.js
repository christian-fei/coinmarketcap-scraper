/* globals test */

const {equal, deepEqual} = require('assert')

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

test('scrapes bitcoin historic data for first week of May, 2018', (done) => {
  scrape('bitcoin', '20180501', '20180507').then(historic => {
    equal(historic.length, 7)
    deepEqual(historic, [{
      'time': 1525644000000,
      'open': 9645.67,
      'high': 9665.85,
      'low': 9231.53,
      'close': 9373.01,
      'volume': '7,394,020,000'
    },
    {
      'time': 1525557600000,
      'open': 9845.31,
      'high': 9940.14,
      'low': 9465.25,
      'close': 9654.8,
      'volume': '7,222,280,000'
    },
    {
      'time': 1525471200000,
      'open': 9700.28,
      'high': 9964.5,
      'low': 9695.12,
      'close': 9858.15,
      'volume': '7,651,940,000'
    },
    {
      'time': 1525384800000,
      'open': 9695.5,
      'high': 9779.2,
      'low': 9585.96,
      'close': 9700.76,
      'volume': '8,217,830,000'
    },
    {
      'time': 1525298400000,
      'open': 9233.97,
      'high': 9798.33,
      'low': 9188.15,
      'close': 9743.86,
      'volume': '10,207,300,000'
    },
    {
      'time': 1525212000000,
      'open': 9104.6,
      'high': 9256.52,
      'low': 9015.14,
      'close': 9235.92,
      'volume': '7,558,160,000'
    },
    {
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
