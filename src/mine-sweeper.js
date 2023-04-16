const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	const rows = matrix.length;
	const cols = matrix[0].length;
	const result = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (matrix[i][j]) {
				result[i][j] = 1;
			} else {
				let count = 0;

				for (let k = i - 1; k <= i + 1; k++) {
					for (let l = j - 1; l <= j + 1; l++) {
						if (k >= 0 && k < rows && l >= 0 && l < cols && matrix[k][l]) {
							count++;
						}
					}
				}

				result[i][j] = count;
			}
		}
	}

	return result;
}

module.exports = {
	minesweeper,
};
