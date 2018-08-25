#!/usr/bin/env node

const scrape = require('./lib/scrape')

if (require.main === module) {
  main(process.argv[2], process.argv[3], process.argv[4])
} else {
  module.exports = main
}

async function main (coin, start, end) {
  if (!coin || !start || !end) {
    process.stdout.write(`Missing parameters!\n`)
    process.stdout.write(`${usage()}\n`)
    throw new Error('Missing parameters')
  }

  const historic = await scrape(coin, start, end)

  process.stdout.write(`${JSON.stringify(historic, null, 2)}\n`)
  return historic
}

function usage () {
  return `
coinmarketcap-scraper [coin] [start] [end]
# Example
coinmarketcap-scraper bitcoin 20180501 20180531
  `
}
