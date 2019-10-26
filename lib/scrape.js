const Page = require('server-html')
const got = require('got')

module.exports = scrape

async function scrape (coin, start, end) {
  const res = await got(`https://coinmarketcap.com/currencies/${coin}/historical-data/?start=${start}&end=${end}`)
  // const html = require('fs').readFileSync(require('path').join(__dirname, 'example.html'), 'utf-8')
  const html = res.body

  const x = html.substring(html.indexOf(`<table class="table`), html.indexOf(`</tbody>`) + 8)
  const document = Page.parse(x)
  const trs = document.getElementsByTagName('tr')
  let tdsGrouped = trs.map(tr => tr.getElementsByTagName('td'))
  tdsGrouped = tdsGrouped.map(td => td.map(t => t.toString().replace(/(^<)(.*)(">)|<\/td>/gi, '')))

  const historic = tdsGrouped.map(toObject).filter(o => o.time)

  return historic
}

function toObject (historic) {
  const keys = ['time', 'open', 'high', 'low', 'close', 'volume']

  return keys.reduce((obj, key, i) => Object.assign(obj, {
    [key]: ['open', 'high', 'low', 'close'].includes(key)
      ? parseFloat(historic[i])
      : ['time'].includes(key)
        ? +new Date(historic[i])
        : historic[i]
  }), {})
}
