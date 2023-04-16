const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	const dns = {};

	for (const domain of domains) {
		const subdomains = domain.split('.').reverse();
		let currentDomain = '';

		for (const subdomain of subdomains) {
			currentDomain = `${subdomain}.${currentDomain}`;
			dns[currentDomain] = (dns[currentDomain] || 0) + 1;
		}
	}

	const formattedDns = {};

	for (const d in dns) {
		const format = `${d.split('.').reverse().join('.')}`;
		formattedDns[format] = dns[d];
	}

	return formattedDns;
}

module.exports = {
	getDNSStats,
};
