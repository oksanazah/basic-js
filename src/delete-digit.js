const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	const arr = n.toString().split('');
	let max = 0;

	arr.map((el, index) => {
		const arr1 = [...arr];
		arr1.splice(index, 1);
		const num = Number(arr1.join(''));
		max = max < num ? num : max;
	});

	return max;
}

module.exports = {
	deleteDigit,
};
