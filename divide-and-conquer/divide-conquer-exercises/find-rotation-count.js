function findRotationCount(arr) {
	let firstRotated = findFirstRotatedNumberIndex(arr);
	if (firstRotated === 0) return 0;
	let count = 0;
	for (let i = firstRotated - 1; i >= 0; i--) {
		if (arr[i]) count++;
	}
	return count;
}

function findFirstRotatedNumberIndex(arr, left = 0, right = arr.length - 1) {
	if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
	if (left <= right) {
		let mid = Math.floor((right + left) / 2);
		if (arr[mid] < arr[mid - 1]) return mid;
		else if (arr[mid] >= arr[right]) return findFirstRotatedNumberIndex(arr, mid + 1, right);
		else return findFirstRotatedNumberIndex(arr, left, mid - 1);
	}
}
module.exports = findRotationCount;
