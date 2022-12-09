/** TreeNode: node for a general tree. */

class TreeNode {
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}

	/** sumValues(): add up all of the values in the tree. */

	sumValues() {
		//toVisit array, used as a stack to keep track of which nodes have been traversed
		const toVisit = [this.root];
		let sum = 0;
		//while toVisit isn't empty and root isn't null
		while (toVisit.length && this.root) {
			let current = toVisit.pop();
			sum += current.val;
			for (let child of current.children) toVisit.push(child);
		}
		return sum;
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens() {}

	/** numGreater(lowerBound): return a count of the number of nodes
	 * whose value is greater than lowerBound. */

	numGreater(lowerBound) {}
}

module.exports = { Tree, TreeNode };
