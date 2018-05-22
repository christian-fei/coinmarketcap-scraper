const scrape = require('./lib/scrape')
const {writeFileSync} = require('fs')
const {join} = require('path')

if (require.main === module) {
  main(process.argv[2], process.argv[3], process.argv[4])
} else {
  module.exports = main
}

async function main (coin, start, end) {
  coin = coin || 'bitcoin'
  start = start || '20180501'
  end = end || '20180531'
  const historic = await scrape(coin, start, end)

  console.log(JSON.stringify(historic, null, 2))
  writeFileSync(join(__dirname, 'samples', `${coin}-${start}-${end}.json`), JSON.stringify(historic, null, 2))
}
