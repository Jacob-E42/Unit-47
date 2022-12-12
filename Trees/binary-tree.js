/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
	childrenAreNull() {
		return this.left === null && this.right === null;
	}
}

class BinaryTree {
	constructor(root = null) {
		this.root = root;
	}

	/** minDepth(): return the minimum depth of the tree -- that is,
	 * the length of the shortest path from the root to a leaf. */

	minDepth() {
		// toVisit functions like a Queue to keep track of traversed nodes in a Breadth First approach
		const toVisit = [this.root];
		let lowestDepth = 0;
		while (toVisit.length && this.root) {
			lowestDepth++;
			let current = toVisit.shift();
			if (current.childrenAreNull()) return lowestDepth;
			toVisit.push(current.left);
			toVisit.push(current.right);
		}
		return lowestDepth;
	}

	/** maxDepth(): return the maximum depth of the tree -- that is,
	 * the length of the longest path from the root to a leaf. */

	maxDepth() {
		if (!this.root) return 0;

		const toVisit = [this.root];
		let highestDepth = 1;
		while (toVisit.length) {
			let current = toVisit.pop();
			if (!current.childrenAreNull()) highestDepth++;
			if (current.left !== null) toVisit.push(current.left);
			if (current.right !== null) toVisit.push(current.right);
		}
		return highestDepth;
	}

	/** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
	 * The path doesn't need to start at the root, but you can't visit a node more than once. */

	maxSum() {
		let result = 0;

		function maxSumHelper(current) {
			if (current === null) return 0;
			let leftbranch = maxSumHelper(current.left);
			let rightbranch = maxSumHelper(current.right);
			result = Math.max(result, current.val + rightbranch + leftbranch);
			return Math.max(0, leftbranch + current.val, rightbranch + current.val);
		}
		maxSumHelper(this.root);
		return result;
	}

	/** nextLarger(lowerBound): return the smallest value in the tree
	 * which is larger than lowerBound. Return null if no such value exists. */

	nextLarger(lowerBound) {
		if (!this.root) return null;
		let nextLarger = null;
		const largerValues = [];
		const toVisit = [this.root];
		while (toVisit.length) {
			let current = toVisit.pop();
			if (current.val > lowerBound) {
				largerValues.push(current.val);
				nextLarger = Math.min(...largerValues);
			}
			if (current.left !== null) toVisit.push(current.left);
			if (current.right !== null) toVisit.push(current.right);
		}
		return nextLarger;
	}

	/** Further study!
	 * areCousins(node1, node2): determine whether two nodes are cousins
	 * (i.e. are at the same level but have different parents. ) */

	areCousins(node1, node2) {}

	/** Further study!
	 * serialize(tree): serialize the BinaryTree object tree into a string. */

	static serialize() {}

	/** Further study!
	 * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

	static deserialize() {}

	/** Further study!
	 * lowestCommonAncestor(node1, node2): find the lowest common ancestor
	 * of two nodes in a binary tree. */

	lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
