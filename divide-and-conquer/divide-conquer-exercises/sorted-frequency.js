// function sortedFrequency(arr, num) {
// 	let firstIdx = findFirst(arr, num);
// 	if (firstIdx == -1) return firstIdx;
// 	let lastIdx = findLast(arr, num);
// 	return lastIdx - firstIdx + 1;
// }

// function findFirst(arr, num, low = 0, high = arr.length - 1) {
// 	if (high >= low) {
// 		let mid = Math.floor((low + high) / 2);
// 		if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
// 			return mid;
// 		} else if (num > arr[mid]) {
// 			return findFirst(arr, num, mid + 1, high);
// 		} else {
// 			return findFirst(arr, num, low, mid - 1);
// 		}
// 	}
// 	return -1;
// }

// function findLast(arr, num, low = 0, high = arr.length - 1) {
// 	if (high >= low) {
// 		let mid = Math.floor((low + high) / 2);
// 		if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
// 			return mid;
// 		} else if (num < arr[mid]) {
// 			return findLast(arr, num, low, mid - 1);
// 		} else {
// 			return findLast(arr, num, mid + 1, high);
// 		}
// 	}
// 	return -1;
// }

// sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints:

// Time Complexity: O(log N)

// Examples:

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

function sortedFrequency(arr, num) {
	const first = findFirst(arr, num);
	console.log("First", first);
	if (first === -1) return -1;
	const last = findLast(arr, num, first);
	console.log("Last", last);
	return last - first + 1;
}
function findFirst(arr, num) {
	let left = 0;
	let right = arr.length - 1;
	while (left <= right) {
		let middle = Math.floor((left + right) / 2);

		if (arr[middle] === num && (middle === 0 || arr[middle - 1] < num)) return middle;
		else if (arr[middle] === num && arr[middle - 1] === num) right = middle - 1;
		else if (arr[middle] > num) right = middle - 1;
		else left = middle + 1;
	}
	console.log("Left", left, "right", right);
	return -1;
}

function findLast(arr, num, first) {
	let left = first;
	let right = arr.length - 1;
	while (left <= right) {
		let middle = Math.floor((left + right) / 2);
		console.log("Middle", middle, "Left", left, "right", right);
		if (arr[middle] === num && (middle === arr.length - 1 || arr[middle + 1] > num)) return middle;
		else if (arr[middle] === num && arr[middle + 1] === num) left = middle + 1;
		else if (arr[middle] < num) left = middle + 1;
		else right = middle - 1;
	}
}
function countOccurrences(arr, num) {
	let count = 0;
	for (let n in arr) {
		if (n === num) count++;
		else break;
	}
	return count > 0 ? count : -1;
}

module.exports = sortedFrequency;
