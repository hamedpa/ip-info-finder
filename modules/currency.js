const axios = require("axios");
const fs = require("fs");

const getCurrencyDetail = async (country) => {
  let currencies = require("../files/country-by-currency-code");
  const resultCurrency = [];
  currencies.forEach((item) => {
    if (item.country.toLowerCase().includes(country.toLowerCase())) {
      resultCurrency.push(item.currency_code);
    }
  });
  uniqueCurrency = resultCurrency.filter(function (item, pos) {
    return resultCurrency.indexOf(item) == pos;
  });
  const finalCurrenciesRes = await axios({
    method: "get",
    url:
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/" +
      String(uniqueCurrency[0]).toLowerCase() +
      ".json",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return finalCurrenciesRes.data;
};
module.exports = getCurrencyDetail;
