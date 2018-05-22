const Page = require('server-html')
const got = require('got')

main(process.argv[2], process.argv[3], process.argv[4])

async function main (coin = 'bitcoin', start, end) {
  start = start || '20180501'
  end = end || '20180531'
  const res = await got(`https://coinmarketcap.com/currencies/${coin}/historical-data/?start=${start}&end=${end}`)
  // const html = require('fs').readFileSync(require('path').join(__dirname, 'example.html'), 'utf-8')
  const html = res.body
  const keys = ['time', 'open', 'high', 'low', 'close', 'volume']

  const x = html.substring(html.indexOf(`<table class="table`), html.indexOf(`</tbody>`) + 8)
  const document = Page.parse(x)
  const trs = document.getElementsByTagName('tr')
  let tdsGrouped = trs.map(tr => tr.getElementsByTagName('td'))
  tdsGrouped = tdsGrouped.map(td => td.map(t => t.toString().replace(/(^<)(.*)(">)|<\/td>/gi, '')))

  const historic = tdsGrouped.map(toObject).filter(o => o.time)
  console.log(JSON.stringify(historic, null, 2))

  function toObject (historic) {
    return keys.reduce((obj, key, i) => Object.assign(obj, {
      [key]: ['open', 'high', 'low', 'close'].includes(key)
            ? parseFloat(historic[i])
            : ['time'].includes(key)
            ? +new Date(historic[i])
            : historic[i]
    }), {})
  }
}
