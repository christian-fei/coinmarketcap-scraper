/* globals test */

const {equal, deepEqual} = require('assert')

const scrape = require('../lib/scrape')

test('scrapes bitcoin historic data for May 1st, 2018', (done) => {
  scrape('bitcoin', '20180501', '20180501').then(historic => {
    equal(historic.length, 1)
    equal(historic[0].open, 9251.47)
    equal(historic[0].high, 9255.88)
    equal(historic[0].low, 8891.05)
    equal(historic[0].close, 9119.01)

    done()
  })
})

test('scrapes bitcoin historic data for first week of May, 2018', (done) => {
  scrape('bitcoin', '20180501', '20180507').then(historic => {
    equal(historic.length, 7)
    equal(historic[0].open, 9645.67)
    equal(historic[0].high, 9665.85)
    equal(historic[0].low, 9231.53)
    equal(historic[0].close, 9373.01)

    equal(historic[1].open, 9845.31)
    equal(historic[1].high, 9940.14)
    equal(historic[1].low, 9465.25)
    equal(historic[1].close, 9654.8)

    equal(historic[2].open, 9700.28)
    equal(historic[2].high, 9964.5)
    equal(historic[2].low, 9695.12)
    equal(historic[2].close, 9858.15)

    equal(historic[3].open, 9695.5)
    equal(historic[3].high, 9779.2)
    equal(historic[3].low, 9585.96)
    equal(historic[3].close, 9700.76)

    equal(historic[4].open, 9233.97)
    equal(historic[4].high, 9798.33)
    equal(historic[4].low, 9188.15)
    equal(historic[4].close, 9743.86)

    equal(historic[5].open, 9104.6)
    equal(historic[5].high, 9256.52)
    equal(historic[5].low, 9015.14)
    equal(historic[5].close, 9235.92)

    equal(historic[6].open, 9251.47)
    equal(historic[6].high, 9255.88)
    equal(historic[6].low, 8891.05)
    equal(historic[6].close, 9119.01)

    done()
  })
})
