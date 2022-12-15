const util = require('util');
const ipInfo = require("./");

//get simple data from ip
ipInfo.getIPInfo('28.106.238.158').then(data => {
    console.log('simple data: ============= \n', data);
}).catch(err => console.log(err));

//get location data from ip
ipInfo.getIPInfo.location('28.106.238.158').then(data => {
    console.log('location data: ============= \n', util.inspect(data, false, null, true))
}).catch(err => console.log(err));

//get whois data from valid domains
ipInfo.getIPInfo.whois('https://www.github.com').then(data => {
    console.log('whois data: ============= \n', data);
}).catch(err => console.log(err));