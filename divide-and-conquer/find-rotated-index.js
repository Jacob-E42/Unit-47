function findRotatedIndex(arr, num) {
	let firstRotatedNumberIndex = findFirstRotatedNumberIndex(arr);
	if (firstRotatedNumberIndex > 0 && num >= arr[0] && num <= arr[firstRotatedNumberIndex - 1]) {
		return findIndex(arr, num, 0, firstRotatedNumberIndex - 1);
	} else {
		return findIndex(arr, num, firstRotatedNumberIndex, arr.length - 1);
	}
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

function findIndex(arr, num, left, right) {
	if (arr.length === 0) return -1;
	if (num < arr[left] || num > arr[right]) return -1;
	if (left <= right) {
		let mid = Math.floor((right + left) / 2);
		if (arr[mid] === num) {
			return mid;
		} else if (arr[mid] < num) {
			return findIndex(arr, num, left + 1, right);
		} else return findIndex(arr, num, left, right - 1);
	}
	return -1;
}

module.exports = findRotatedIndex;
