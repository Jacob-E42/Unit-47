/** Node: node for a stack. */

const LinkedList = require("./linked-list");

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
	constructor() {
		this._list = new LinkedList();
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	/** push(val): add new value to end of the stack. Returns undefined. */

	push(val) {
		this._list.unshift(val);
		this.first = this._list.head;
		this.last = this._list.tail;
		this.size++;
	}

	/** pop(): remove the node from the top of the stack
	 * and return its value. Should throw an error if the stack is empty. */

	pop() {
		if (this.isEmpty()) throw new Error("Error: Stack is empty.");

		const removed = this._list.shift();
		this.first = this._list.head;
		this.last = this._list.tail;
		this.size--;
		return removed;
	}

	/** peek(): return the value of the first node in the stack. */

	peek() {
		return this._list.head.val;
	}

	/** isEmpty(): return true if the stack is empty, otherwise false */

	isEmpty() {
		return this._list.length === 0;
	}
}

module.exports = Stack;
