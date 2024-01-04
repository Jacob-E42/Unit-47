// function findFloor(arr, num) {
// 	let start = 0;
// 	let end = arr.length - 1;
// 	while (start <= end) {
// 		let mid = Math.floor((start + end) / 2);
// 		if (mid === arr.length - 1 && arr[mid] <= num) return arr[mid];
// 		if (arr[mid] <= num && arr[mid + 1] >= num) return arr[mid];
// 		else if (arr[mid] <= num && arr[mid + 1] <= num) start = mid + 1;
// 		else end = mid - 1;
// 	}
// 	return -1;
// }

// findFloor
// Write a function called findFloor which accepts a sorted array and a value x,
//  and returns the floor of x in the array. The floor of x in an array is the largest element
//   in the array which is smaller than or equal to x. If the floor does not exist, return -1.

// Examples:

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1
// Constraints

// Time Complexity: O(log N)
function findFloor(arr, x) {
	if (arr[0] > x) return -1;
	let left = 0;
	let right = arr.length - 1;
	while (left <= right) {
		let middle = Math.floor((left + right) / 2);
		if (arr[middle] > x || arr[middle] === x) right = right - 1;
		else if (arr[middle] < x && arr[middle + 1] < x) left = left + 1;
		else return arr[middle];
	}
}
module.exports = findFloor;
