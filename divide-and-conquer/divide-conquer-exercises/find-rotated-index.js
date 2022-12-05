function findRotatedIndex(arr, num) {
	let firstRotatedNumberIndex = findFirstRotatedNumberIndex(arr);
	console.log(arr, "\n", "first rotated:", arr[firstRotatedNumberIndex]);
	if (firstRotatedNumberIndex === 0) return findIndex(arr, num);
	let arrSegmentStartingIndex = findArrSegment(arr, num, firstRotatedNumberIndex);
	if (arrSegmentStartingIndex === -1) return -1;
	let arrSegmentStoppingIndex = arrSegmentStartingIndex === 0 ? firstRotatedNumberIndex - 1 : arr.length - 1;
	console.log("start:", arrSegmentStartingIndex, "stop:", arrSegmentStoppingIndex);
	return findIndex(arr, num, arrSegmentStartingIndex, arrSegmentStoppingIndex);
}

function findFirstRotatedNumberIndex(arr, left = 0, right = arr.length - 1) {
	if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
	if (left <= right) {
		let mid = left + Math.floor((right - left) / 2);
		console.log(arr, "\n", "left:", arr[left], "mid:", arr[mid], "right:", arr[right]);
	}
	return -1;
}

function findArrSegment(arr, num, firstRotated) {
	let rightArrHighIndex = arr.length - 1;
	let leftArrHighIndex = firstRotated - 1;
	if (num < arr[rightArrHighIndex]) return firstRotated;
	else if (num <= arr[leftArrHighIndex]) return 0;
	return -1;
}

function findIndex(arr, num, left = 0, right = arr.length - 1) {
	if (left <= right) {
		let mid = left + Math.floor((right - left) / 2);
		console.log(arr, "\n", "left:", arr[left], "mid:", arr[mid], "right:", arr[right]);
		if (num < arr[mid]) {
			return findIndex(arr, num, left, right - 1);
		} else if (arr[mid] < num) {
			return findIndex(arr, num, left + 1, right);
		} else return mid;
	}
	return -1;
}

module.exports = findRotatedIndex;
