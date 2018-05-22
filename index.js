const Page = require('server-html')



const html = require('fs').readFileSync(require('path').join(__dirname, 'example.html'), 'utf-8')
const x = html.substring(html.indexOf(`<table class="table`), html.indexOf(`</tbody>`) + 8)
// console.log('x', x)
const document = Page.parse(x)
const trs = document.getElementsByTagName('tr')
// console.log(trs[1])
let tdsGrouped = trs.map(tr => tr.getElementsByTagName('td'))
tdsGrouped = tdsGrouped.map(td => td.map(t => t.toString().replace(/(^<)(.*)(">)|<\/td>/gi, '')))
console.log('---')
console.log(tdsGrouped[1])
// console.log(tdsGrouped.map(td => td.toString()).filter(Boolean)[0])
