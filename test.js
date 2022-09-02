const expect = require('chai').expect;
var ipInfo = require(".");

describe('Testing Response of ip info finder" ', () => {
	it('Check status in response for all services', async () => {
		const testIp = '191.96.97.58';

		const location = await ipInfo.getIPInfo.location(testIp);
		const currency = await ipInfo.getIPInfo.currency(testIp);

		expect(typeof location).to.equal('object');
		expect(typeof currency).to.equal('object');
	}).timeout(4000);

	it('Check type in response for general ip finder', async () => {
		const testIp = '191.96.97.58';

		const result = await ipInfo.getIPInfo.location(testIp);
		expect(typeof result).to.equal('object');

		// expect(typeof result['as']).to.equal('string');
		// expect(typeof result['asname']).to.equal('string');
		// expect(typeof result['city']).to.equal('string');
		// expect(typeof result['continent']).to.equal('string');
		// expect(typeof result['continentCode']).to.equal('string');
		// expect(typeof result['country']).to.equal('string');
		// expect(typeof result['countryCode']).to.equal('string');
		// expect(typeof result['currency']).to.equal('string');
		// expect(typeof result['district']).to.equal('string');
		// expect(typeof result['hosting']).to.equal('boolean');
		// expect(typeof result['isp']).to.equal('string');
		// expect(typeof result['lat']).to.equal('number');
		// expect(typeof result['lon']).to.equal('number');
		// expect(typeof result['offset']).to.equal('number');
		// expect(typeof result['org']).to.equal('string');
		// expect(typeof result['proxy']).to.equal('boolean');
		// expect(typeof result['query']).to.equal('string');
		// expect(typeof result['regionName']).to.equal('string');
		// expect(typeof result['status']).to.equal('string');
		// expect(typeof result['timezone']).to.equal('string');
		// expect(typeof result['zip']).to.equal('string');
		// expect(typeof result['location']).to.equal('object');

	}).timeout(4000);

	it('Check ip checker (isIP)', async () => {
		const correctIp = '191.96.97.58';
		const wrongIp = '360.20.20.20';

		const result1 = await ipInfo.getIPInfo.isIP(correctIp);
		const result2 = await ipInfo.getIPInfo.isIP(wrongIp);

		expect(result1).to.equal(true);
		expect(result2).to.equal(false);
	});

	it('Check ip checker (isIPv6)', async () => {
		const correctIp = '2604:a880:400:d0::1ec5:f001';
		const wrongIp = '191.96.97.58';

		const result1 = await ipInfo.getIPInfo.isIPv6(correctIp);
		const result2 = await ipInfo.getIPInfo.isIPv6(wrongIp);

		expect(result1).to.equal(true);
		expect(result2).to.equal(false);
	});

	it('Check ip checker (isIPv4)', async () => {
		const correctIp = '191.96.97.58';
		const wrongIp = '2604:a880:400:d0::1ec5:f001';

		const result1 = await ipInfo.getIPInfo.isIPv4(correctIp);
		const result2 = await ipInfo.getIPInfo.isIPv4(wrongIp);

		expect(result1).to.equal(true);
		expect(result2).to.equal(false);
	});

	it('Check ip checker (ipVersion)', async () => {


		const resultV4 = await ipInfo.getIPInfo.ipVersion('191.96.97.58');
		const resultV6 = await ipInfo.getIPInfo.ipVersion('2604:a880:400:d0::1ec5:f001');

		expect(resultV4).to.equal(4);
		expect(resultV6).to.equal(6);
	});

});

describe('Testing Response whois and search address" ', () => {
	it('Check status in response services', async () => {
		const testIp = '185.132.132.216';
		const testWebsite = 'https://github.com';

		const whoisIP = await ipInfo.getIPInfo.whois(testIp);
		const whoisWeb = await ipInfo.getIPInfo.whois(testWebsite);
		const whoisEmptyInput = await ipInfo.getIPInfo.whois('');
		// console.log(whoisWeb);

		expect(typeof whoisIP).to.equal('object');
		expect(typeof whoisWeb).to.equal('object');
		expect(typeof whoisEmptyInput).to.equal('object');



		// expect(Object.keys(whoisIp).length).to.greaterThan(5);
		const search = await ipInfo.getIPInfo.search('https://github.com', { filter: 'site', name: 'hamedpa' }, 1);
		// console.log(search);


		const page = 1;
		ipInfo.getIPInfo.search('https://github.com', { filter: 'site', emailDomain: 'gmail.com', name: 'linus torvalds' }, page).then(data => {
			// console.log(data);
		})
			.catch(err => console.log(err));

	}).timeout(5000);
});