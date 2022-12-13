class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses iteration. */

	insert(val) {
		let node = new Node(val);
		if (!this.root) {
			this.root = node;
			return this;
		}
		let current = this.root;

		while (true) {
			if (val < current.val) {
				if (current.left !== null) {
					current = current.left;
				} else {
					current.left = node;
					return this;
				}
			} else if (val > current.val) {
				if (current.right !== null) {
					current = current.right;
				} else {
					current.right = node;
					return this;
				}
			}
		}
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses recursion. */

	insertRecursively(val, current = this.root) {
		if (!this.root) {
			this.root = new Node(val);
			return this;
		}

		if (val < current.val) {
			if (current.left === null) {
				current.left = new Node(val);
				return this;
			} else return this.insertRecursively(val, current.left);
		} else if (val > current.val) {
			if (current.right === null) {
				current.right = new Node(val);
				return this;
			} else return this.insertRecursively(val, current.right);
		}
	}

	/** find(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		let current = this.root;
		while (current) {
			if (val === current.val) {
				return current;
			} else if (val < current.val) {
				current = current.left;
			} else current = current.right;
		}
	}

	/** findRecursively(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val, current = this.root) {
		if (current === null) return;
		if (val === current.val) return current;
		else if (val < current.val) return this.findRecursively(val, current.left);
		else return this.findRecursively(val, current.right);
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
	 * Return an array of visited nodes. */

	dfsPreOrder() {
		const visited = [];

		function traverse(node) {
			if (node) visited.push(node.val);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return visited;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
	 * Return an array of visited nodes. */

	dfsInOrder() {
		const visited = [];

		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node) visited.push(node.val);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return visited;
	}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
	 * Return an array of visited nodes. */

	dfsPostOrder() {
		const visited = [];

		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			if (node) visited.push(node.val);
		}
		traverse(this.root);
		return visited;
	}

	/** bfs(): Traverse the array using BFS.
	 * Return an array of visited nodes. */

	bfs() {
		const visited = [];
		const toVisit = [this.root];

		function traverse(node) {
			console.log(node);
			if (node === null) return;
			toVisit.shift();
			visited.push(node.val);
			if (node.left) {
				toVisit.push(node.left);
			}
			if (node.right) {
				toVisit.push(node.right);
			}
			if (toVisit.length > 0) traverse(toVisit[0]);
		}
		traverse(this.root);
		return visited;
	}

	/** Further Study!
	 * remove(val): Removes a node in the BST with the value val.
	 * Returns the removed node. */

	remove(val) {}

	/** Further Study!
	 * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	isBalanced() {}

	/** Further Study!
	 * findSecondHighest(): Find the second highest value in the BST, if it exists.
	 * Otherwise return undefined. */

	findSecondHighest() {}
}

module.exports = BinarySearchTree;
