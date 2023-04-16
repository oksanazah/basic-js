const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
	if (!Array.isArray(arr)) {
		throw Error("'arr' parameter must be an instance of the Array!");
	}

	const newArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '--discard-next') {
			arr.length > i + 1 ? i++ : i;
		} else if (arr[i] === '--discard-prev') {
			newArr.length > 0 && newArr[newArr.length - 1] === arr[i - 1]
				? newArr.pop()
				: newArr;
		} else if (arr[i] === '--double-next') {
			arr.length > i + 1 ? newArr.push(arr[i + 1]) : newArr;
		} else if (arr[i] === '--double-prev') {
			arr[i - 1] && arr[i - 2] !== '--discard-next'
				? newArr.push(arr[i - 1])
				: newArr;
		} else {
			newArr.push(arr[i]);
		}
	}

	return newArr;
}

module.exports = {
	transform,
};
