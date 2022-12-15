function merge(arr1, arr2) {
	const results = [];
	let a = 0;
	let b = 0;
	while (a < arr1.length && b < arr2.length) {
		if (arr1[a] < arr2[b]) {
			results.push(arr1[a]);
			a++;
		} else {
			results.push(arr2[b]);
			b++;
		}
	}
	while (a < arr1.length) {
		results.push(arr1[a]);
		a++;
	}
	while (b < arr2.length) {
		results.push(arr2[b]);
		b++;
	}
	return results;
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = arr.length / 2;
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

module.exports = { merge, mergeSort };
