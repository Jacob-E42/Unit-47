function findFloor(arr, num) {
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (mid === arr.length - 1 && arr[mid] <= num) return arr[mid];
		if (arr[mid] <= num && arr[mid + 1] >= num) return arr[mid];
		else if (arr[mid] <= num && arr[mid + 1] <= num) start = mid + 1;
		else end = mid - 1;
	}
	return -1;
}

module.exports = findFloor;
