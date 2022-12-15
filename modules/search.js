const util = require("./keygen");
const axios = require("axios");
const jsdom = require("jsdom");
const ipChecker = require('./ipChecker');


const { JSDOM } = jsdom;
const provider = 'https://who.is';

function queryBuilder(query = { filter, emailDomain, name }, address) {
    if (query.filter == 'catch') {
        return 'catch:' + address;
    }
    else if (query.filter == 'site') {
        return `intext:"${query.emailDomain}" site:${address} ${query.name}`.replace(' ', '%20');
    }
    else if (query.filter == 'no filter') {
        return address;
    }
}

exports.findWhoIs = async (address) => {
    if (!address) return {};

    let url;
    address = address.toLowerCase().trim();

    if (ipChecker({ exact: true }).test(address))
        url = provider + "/whois-ip/ip-address/" + String(address);
    else {
        if (address.startsWith('https') || address.startsWith('http')) {
            address = address.replace('https://', '').replace('http://', '');
        }
        url = provider + "/whois/" + String(address);
    }

    let htmlCodes = await axios({
        method: "get",
        url,
    });
    htmlCodes = htmlCodes['data'];
    const dom = new JSDOM(htmlCodes);

    let result = await this.findDataFromHtml(dom, address);
    if (Object.keys(result).length === 0) {

        result = { description: 'Whois information for this domain has been blocked.' };
    }

    delete result.DNSSEC;
    delete result.https;
    delete result.Registrar;
    return result;
}


exports.getMoreInfoFromIp = async (ip, { filter, name }, skip = 1) => {
    const limit = 10;
    if (skip < 1) skip = 1;
    let response;
    try {
        response = await axios({
            method: "get",
            url: util.moreInfoKey() + queryBuilder({ filter, name }, ip) + `&page=${skip}&limit=${limit}`,
        });
    } catch (error) {
        response.data = {};
    }
    return response.data;
};

exports.findDataFromHtml = async (dom, address) => {
    let query;
    if (ipChecker({ exact: true }).test(address))
        query = `body > div:nth-child(7) > div > div > div:nth-child(4) > div > div > div > pre`;
    else {
        query = `body > div:nth-child(7) > div.container > div:nth-child(6) > div.col-md-8.queryResponseContainer > div:nth-child(12) > div > div > div > pre`;
    }
    const infos = dom.window.document.querySelector(query) ? dom.window.document.querySelector(query).textContent : '';
    const result = {};
    for (const iterator of infos.split('\n')) {
        if (iterator.includes('no entries found')) {
            result['status'] = 404;
            result['description'] = `No match for ${address}`
        }
        let key = iterator.split(':')[0] ? iterator.split(':')[0].trim() : '';
        const value = iterator.split(':')[1] ? iterator.split(':')[1].trim() : '';
        if (key && value) {
            if (!key.includes('%')) {
                key = key.trim().replace(/ /g, '').replace(/>>>/g, '').replace(/\//g, '');
                result[key] = value;
            }
        }
    }
    return result;
};