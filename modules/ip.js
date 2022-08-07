const axios = require("axios");
const ipChecker = require('./ipChecker');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const extractIPInfo = async (ip) => {
  if (!ipChecker(ip)) return;

  const response = await axios({
    method: "get",
    url:
      '=Gsoh?oeg/moc.ndcyek.slo+t-:sptth118xTrx'.replace('118xTrx','')
      .replace(/G/,'t').split("").reverse().join("").replace('+','o').replace('-','//') +
      String(ip),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const dom = new JSDOM(response.data);
  const city = dom.window.document.querySelector('#geoResult > div.bg-light.medium.rounded.p-3 > dl:nth-child(2)');
  let column, row;
  const rows = [];
  for (const iterator of city.childNodes) {
    if (iterator.nodeName === 'DT') {
      column = iterator.textContent;
    }
    else if (iterator.nodeName === 'DD') {
      row = iterator.textContent;
      if (column && row) {
        rows.push({ [column]: row });
        column = undefined;
        row = undefined;
      }
    }

  }
  const info = {};
  rows.forEach(row => {
    Object.assign(info, row);
  });

  const ipAddress = dom.window.document.querySelector('#geoResult > div.bg-light.medium.rounded.p-3 > dl:nth-child(4) > dd:nth-child(2)');
  const hostname = dom.window.document.querySelector('#geoResult > div.bg-light.medium.rounded.p-3 > dl:nth-child(4) > dd:nth-child(4)');
  const provider = dom.window.document.querySelector('#geoResult > div.bg-light.medium.rounded.p-3 > dl:nth-child(4) > dd:nth-child(6)');
  const ASN = dom.window.document.querySelector('#geoResult > div.bg-light.medium.rounded.p-3 > dl:nth-child(4) > dd:nth-child(8)');
  const data = {
    ipAddress: ipAddress.textContent,
    hostname: hostname.textContent,
    provider: provider.textContent,
    ASN: ASN.textContent,
  }
  const result = Object.assign(info, data);

  result.lat = result.Coordinates.split('/')[0].replace('(lat)', '').trim();
  result.lon = result.Coordinates.split('/')[1].replace('(long)', '').trim();

  if (result['Postal code']) {
    result.postalCode = result['Postal code'];
    delete result['Postal code'];
  }
  return result;
};

module.exports = extractIPInfo;