# ip-info-finder
[![npm](https://img.shields.io/npm/v/ip-info-finder.svg?style=flat-square)](https://www.npmjs.com/package/ip-info-finder)

![alt text](./img/logo.png?raw=true)


A Package to get more information from IP address such as whois info, country, city ,mobile, user proxy or vpn status and etc.
This package support ipv4 and ipv6

</br>
find more data such as 
</br>
whois </br>
Weather </br>
Currency rate </br>
COVID 19 statistics </br>
Location (Street,county,...)
</br></br>

## Installation
Install via NPM:

```bash
npm install ip-info-finder

```

## Usage

#### javascript

```javascript

var ipInfo = require("ip-info-finder");

ipInfo.getIPInfo('IP-ADDRESS').then(data => {
    console.log(data);
})
.catch(err => console.log(err));


```

#### TypeScript

```typescript

import * as ipInfo from 'ip-info-finder';

ipInfo.getIPInfo('IP-ADDRESS').then(data => {
    console.log(data);
})
.catch(err => console.log(err));

```

#### Result 
```json
{
  "City": "London",
  "Region": "England (ENG)",
  "Postal code": "EC2V",
  "Country": "United Kingdom (GB)",
  "Continent": "Europe (EU)",
  "Coordinates": "51.5164 (lat) / -0.093 (long)",
  "Time": "2022-08-05 20:42:49 (Europe/London)",
  "ipAddress": "212.102.63.76",
  "hostname": "unn-212-102-63-76.cdn77.com",
  "provider": "Datacamp Limited",
  "ASN": "60068",
  "lat": "51.5164",
  "lon": "-0.093"
}

```
## Optional setting

### Location

<p>discover detail of the area from ip like county , city , street , suburb , postcode and so on.</p>

```javascript
ipInfo.getIPInfo.location('IP-ADDRESS').then(data => {
    console.log(data);
})
.catch(err => console.log(err));

```

#### Result

```json
{
  "City": "London",
  "Region": "England (ENG)",
  "Postal code": "EC2V",
  "Country": "United Kingdom (GB)",
  "Continent": "Europe (EU)",
  "Coordinates": "51.5164 (lat) / -0.093 (long)",
  "location": [
    {
      "place_id": 143192862,
      "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
      "osm_type": "way",
      "osm_id": 164201035,
      "boundingbox": [ "51.5164009", "51.5165483", "-0.093147", "-0.0928321" ],
      "lat": "51.5164746",
      "lon": "-0.09298954999999956",
      "display_name": "St Mary Aldermanbury, Aldermanbury, Cheap, City of London, Greater London, England, EC2V 7RF, United Kingdom",
      "class": "historic",
      "type": "ruins",
      "importance": 0.001,
      "icon": "https://nominatim.openstreetmap.org/ui/mapicons/tourist_ruin.p.20.png",
      "address": {
        "historic": "St Mary Aldermanbury",
        "road": "Aldermanbury",
        "quarter": "Cheap",
        "city": "City of London",
        "ISO3166-2-lvl6": "GB-LND",
        "state_district": "Greater London",
        "state": "England",
        "ISO3166-2-lvl4": "GB-ENG",
        "postcode": "EC2V 7RF",
        "country": "United Kingdom",
        "country_code": "gb"
      }
    }
  ]
}
```
### WHOIS

<p>find whois easily by ip or website address.</p>

```javascript
ipInfo.getIPInfo.whois('IP OR WEBSITE').then(data => {
    console.log(data);
})
.catch(err => console.log(err));

```


#### Result

```json
{
  "Domain Name": "github.com",
  "Registry Domain ID": "1264983250_DOMAIN_COM-VRSN",
  "Registrar WHOIS Server": "whois.markmonitor.com",
  "Registrar URL": "http",
  "Updated Date": "2020-09-08T09",
  "Creation Date": "2007-10-09T18",
  "Registrar Registration Expiration Date": "2022-10-09T07",
  "Registrar": "MarkMonitor, Inc.",
  "Registrar IANA ID": "292",
  "Registrar Abuse Contact Phone": "+1.2083895770",
  "URL of the ICANN WHOIS Data Problem Reporting System": "http",
  ">>> Last update of WHOIS database": "2022-02-25T16",
  "https": "//domains.markmonitor.com/whois",
  "Visit MarkMonitor at https": "//www.markmonitor.com",
  "Information Updated": "2022-02-25 16"
}
```

### IP checker

```typescript
var ipInfo = require("ip-info-finder")


await ipInfo.getIPInfo.isIP('1:2:3:4:5:6:7:8');
//=> true
await ipInfo.getIPInfo.isIP('192.168.0.1');
//=> true
await ipInfo.getIPInfo.isIPv4('1:2:3:4:5:6:7:8');
//=> false
await ipInfo.getIPInfo.isIPv6('1:2:3:4:5:6:7:8');
//=> true
await ipInfo.getIPInfo.ipVersion('1:2:3:4:5:6:7:8');
//=> 6
```

### Weather

<p>what's more you can discover climate from IP address</p>

```javascript
ipInfo.getIPInfo.weather('IP-ADDRESS').then(data => {
    console.log(data);
})
.catch(err => console.log(err));

```

#### Result

```json
{
  "as": "AS61317 Digital Energy Technologies Ltd.",
  "asname": "ASDETUK",
  "city": "Chicago",
  "continent": "North America",
  "continentCode": "NA",
  "country": "United States",
  "countryCode": "US",
  "currency": "USD",
  "district": "",
  "hosting": true,
  "isp": "Digital Energy Technologies Chile SpA",
  "lat": 41.8764,
  "lon": -87.6133,
  "mobile": false,
  "offset": -18000,
  "org": "Digital Energy Technologies Limited",
  "proxy": true,
  "query": "191.96.97.58",
  "region": "IL",
  "regionName": "Illinois",
  "status": "success",
  "timezone": "America/Chicago",
  "zip": "60602",
   "weather": {
    "temperature": "28 °C",
    "wind": "17 km/h",
    "description": "Partly cloudy",
    "forecast": [
      { "day": "1", "temperature": "+28 °C", "wind": "13 km/h" },
      { "day": "2", "temperature": "26 °C", "wind": "19 km/h" },
      { "day": "3", "temperature": "+23 °C", "wind": "15 km/h" }
    ]
  }
}
```

### Currency

<p>access latest currency rate from IP this method give you lists of all the available currencies in prettified json format:
</p>

```javascript
ipInfo.getIPInfo.currency('IP-ADDRESS').then(data => {
    console.log(data);
})
.catch(err => console.log(err));


```


#### Result

```json
{
  "as": "AS14061 DigitalOcean, LLC",
  "asname": "DIGITALOCEAN-ASN",
  "city": "North Bergen",
  "continent": "North America",
  "continentCode": "NA",
  "country": "United States",
  "countryCode": "US",
  "currency": "USD",
  "district": "",
  "hosting": true,
  "isp": "DigitalOcean, LLC",
  "lat": 40.793,
  "lon": -74.0247,
  "mobile": false,
  "offset": -14400,
  "org": "Digital Ocean",
  "proxy": false,
  "query": "2604:a880:400:d0::1ec5:f001",
  "region": "NJ",
  "regionName": "New Jersey",
  "status": "success",
  "timezone": "America/New_York",
  "zip": "07047",
  "currencyDetail": {
    "date": "2021-08-30",
    "usd": {
      "aed": 3.67301,
      "afn": 86.12501,
      "all": 103.6936,
      "amd": 493.71,
      "ang": 1.794866,
    }
  }
}
```
### Covid statistics

<p>access most recent Coronavirus statistics from IP.
</p>

```javascript
ipInfo.getIPInfo.covid('IP-ADDRESS').then(data => {
  console.log(data);
})
.catch(err => console.log(err));
```
#### Result

```json
"covid": {
    "country": "USA",
    "cases": 40131681,
    "todayCases": 17582,
    "deaths": 658103,
    "todayDeaths": 193,
    "recovered": 31023726,
    "active": 8449852,
    "critical": 25691,
    "casesPerOneMillion": 120421,
    "deathsPerOneMillion": 1975,
    "totalTests": 584387097,
    "testsPerOneMillion": 1753534
  }
```
### Languages
<p>get result with your language</p>

##### Example 

```javascript
//Arabic 
ipInfo.getIPInfo('IP-ADDRESS','ar').then(data => {
    console.log(data);
})
.catch(err => console.log(err));

//French 
ipInfo.getIPInfo('IP-ADDRESS','fr').then(data => {
    console.log(data);
})
.catch(err => console.log(err));

```
#### Result 

```json
{
  "City": "Europe (UE)",
  "Region": "Angleterre (ENG)",
  "Country": "Royaume-Uni (GB)",
  "Continent": "Londres",
  "Coordinates": "51.5164 (lat) / -0.093 (long)",
  "Time": "2022-08-05 21:35:14 (Europe/London)",
  "ipAddress": "212.102.63.76",
  "hostname": "unn-212-102-63-76.cdn77.com",
  "provider": "Datacamp Limited",
  "ASN": "60068",
  "lat": "51.5164",
  "lon": "-0.093",
  "postalCode": "EC2V"
}

```



### Search IP or Website address in search engines
<p>
you can add some extra filter to search more accurately
or search with no filter
</p>

<p>filter has three mode</p>

<table>
  <tr>
    <th>filter</th>
    <th>description</th>
    
  </tr>
  <tr>
    <td>catch</td>
    <td>find websites that serve or index ip / website</td>
  </tr>
  <tr>
    <td>site</td>
    <td>find email by ip / website</td>
  </tr>
   <tr>
    <td>no filter</td>
    <td>find every information that exist in the search engines</td>
  </tr>

</table>

<p>
some example
</p>

##### Site Filter 
```javascript
const page = 1;
ipInfo.getIPInfo.search('https://github.com', { filter: 'site', name: 'linus torvalds' }, page).then(data => {
  console.log(data);
})
.catch(err => console.log(err));
```

```json
{
  "alternative_search": {
    "did_you_mean": null,
    "showing_results_for": null,
    "search_instead_for": null
  },
  "webs": [
    {
      "title": "Commits · torvalds/pesconvert - GitHub",
      "description": "pes: new_block() fails if <em>undefined</em> color is referenced ... <em>Linus Torvalds</em> authored and torvalds committed on Dec 2, 2011.",
      "direction": "ltr",
      "favicon": null,
      "thumbnail": null,
      "cdn_thumbnail": null,
      "web_displayed_link": ["Array"],
      "images": null,
      "web_link": "https://github.com/torvalds/pesconvert/commits",
      "hash_web_link": "qfTv3zGzO0N9tQonUJ4OUQ",
      "domain": "github.com",
      "full_domain": "github.com",
      "extra_data": null,
      "position": 1,
      "hash": "qfTv3zGzO0N9tQonUJ4OUQ"
    },
   
  ],
  "selected_results": {
    "image": { "data": null, "extra_data": null },
    "movie": { "data": null },
    "market": { "data": null },
    "audio": { "data": null },
    "media": { "data": null, "extra_data": ["Object"] }
  },
  "top_stories": null,
  "vertical_top_stories": null,
  "related_searches": null,
  "people_also_search": null,
  "smart_answer": {}
}
```
<p>you can add mail domain for search better</p>

```javascript
const page = 1;
ipInfo.getIPInfo.search('https://facebook.com', { filter: 'site',emailDomain:'gmail.com', name: 'linus torvalds' }, page).then(data => {
  console.log(data);
})
```
##### Catch Filter 
```javascript
const page = 1;
ipInfo.getIPInfo.search('website or ip', { filter: 'catch' }, page).then(data => {
  console.log(data);
})
.catch(err => console.log(err));
```

##### No Filter 
```javascript
const page = 1;
ipInfo.getIPInfo.search('website or ip', { filter: 'no filter' }, page).then(data => {
  console.log(data);
})
.catch(err => console.log(err));
```
## Support
  - [Bug Reports](https://github.com/hamedpa/ip-info-finder/issues/)

## Contributors
<p>
Pull requests are always welcome! Please base pull requests against the main branch and follow the contributing guide.

if your pull requests makes documentation changes, please update readme file.
</p>

## License

This project is licensed under the terms of the
MIT license
