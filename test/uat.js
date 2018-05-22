/* globals test */

const {equal} = require('assert')
const {readFileSync} = require('fs')
const {join} = require('path')
const main = require('../')

test('user gets json with market data for May 1st, 2018', async (done) => {
  await main('bitcoin', '20180501', '20180501')

  const res = readFileSync(join(__dirname, '..', 'samples', 'bitcoin-20180501-20180501.json'), 'utf-8')
  const historic = JSON.parse(res)
  equal(historic.length, 1)
  equal(historic[0].open, 9251.47)
  equal(historic[0].high, 9255.88)
  equal(historic[0].low, 8891.05)
  equal(historic[0].close, 9119.01)

  done()
})
