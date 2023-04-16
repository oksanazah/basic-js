const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
	let lastDigit = 0;
	let result = 0;
	let decimal = 10;

	while (n) {
		lastDigit = n % decimal;
		result += lastDigit;
		n = n / decimal - ((n / decimal) % 1);
	}

	if (result > 9) {
		result = getSumOfDigits(result);
	}

	return result;
}

module.exports = {
	getSumOfDigits,
};
