/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
	for (let num of nums) {
		if (i === nums.length) return 1;
		return nums[i] * product(nums, i + 1);
	}
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {
	if (i === words.length) return Math.max(words[i - 1].length, 0);
	return Math.max(words[i].length, longest(words, i + 1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
	if (str.length === 1) return str.slice(0, 1);
	if (str.length === 0) return "";
	return str.slice(0, 1) + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
	if (str.length <= 1) return true;
	if (str[0] === str[str.length - 1]) return isPalindrome(str.slice(1, -1));
	return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
	if (i === arr.length) return -1;
	if (arr[i] === val) return i;
	return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
	if (str.length < 1) return "";
	return str.slice(-1) + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
	let arr = [];
	for (let key in obj) {
		if (typeof obj[key] === "string") arr.push(obj[key]);
		else if (typeof obj[key] === "object") arr.push(...gatherStrings(obj[key], arr));
	}
	return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch
};
