const axios = require("axios");
const translate = require("@vitalets/google-translate-api");
const ipChecker = require('./modules/ipChecker');
const getCurrencyDetail = require("./modules/currency");
const getLocationDetail = require("./modules/location");
const getWeatherDetail = require("./modules/weather");
const getCovid = require("./modules/covid");
const util = require("./modules/keygen");
const { getMoreInfoFromIp, findWhoIs } = require("./modules/search");
const extractIPInfo = require("./modules/ip");

const convertToLanguage = async (data, lang, currencyStatus) => {
  const input =
    data.as +
    " / " +
    data.city +
    " / " +
    data.continent +
    " / " +
    data.country +
    " / " +
    data.org +
    " / " +
    data.regionName;
  const res = await translate(input, { to: lang });
  try {
    const output = res.text.split(" / ");
    data.as = output[0];
    data.continent = output[1];
    data.city = output[2];
    if (!currencyStatus) data.country = output[3];
    data.org = output[4];
    data.regionName = output[5];
  } catch (err) {
    console.error(err);
  }
  return data;
};

const sendRequest = async (ip, lang, currencyStatus = false) => {

  const response = await extractIPInfo(ip);

  if (lang === "en") {
    return response;
  } else {
    const res = convertToLanguage(response, lang, currencyStatus);

    return res;
  }
};


exports.getIPInfo = async (ip, lang = "en") => {
  let data = await sendRequest(ip, lang);
  return data;
};

exports.getIPInfo.currency = async (ip, lang = "en") => {
  let data = await sendRequest(ip, lang, true);
  data.currencyDetail = await getCurrencyDetail(data.country);
  return data;
};

exports.getIPInfo.location = async (ip, lang = "en") => {
  let data = await sendRequest(ip, lang, true);
  data.location = await getLocationDetail(data.lat, data.lon);
  return data;
};

exports.getIPInfo.weather = async (ip, lang = "en") => {
  let data = await sendRequest(ip, lang, true);
  data.weather = await getWeatherDetail(data.city);
  return data;
};

exports.getIPInfo.covid = async (ip, lang = "en") => {
  let data = await sendRequest(ip, lang, true);
  data.covid = await getCovid(data.country);
  return data;
};

exports.getIPInfo.isIP = async (ip) => {
  return ipChecker({ exact: true }).test(ip);
}

exports.getIPInfo.isIPv6 = async (ip) => {
  return ipChecker.v6({ exact: true }).test(ip);
}

exports.getIPInfo.isIPv4 = async (ip) => {
  return ipChecker.v4({ exact: true }).test(ip);
}

exports.getIPInfo.ipVersion = async (ip) => {
  return await this.getIPInfo.isIP(ip) ? (await this.getIPInfo.isIPv6(ip) ? 6 : 4) : undefined;
}

exports.getIPInfo.whois = async (address) => {
  return await findWhoIs(address);
}


exports.getIPInfo.search = async (address, { filter, name }, page) => {
  const res = await getMoreInfoFromIp(address, { filter, name }, page);
  return res['results'];
}