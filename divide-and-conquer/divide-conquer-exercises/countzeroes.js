// countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s,
// write a function called countZeroes, which returns the number of zeroes in the array.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0

function countZeroes(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left <= right) {
		let middle = Math.floor((right + left) / 2);
		console.log(arr, "middle ->", middle);
		if (arr[middle] === 0 && (arr[middle - 1] === 1 || middle === 0)) return arr.slice(middle).length;
		else if (arr[middle - 1] === 0) {
			right = middle - 1;
			console.log("new right ->", right);
		} else {
			left = middle + 1;
			console.log("new left", left);
		}
	}
	return 0;
}

module.exports = countZeroes;
