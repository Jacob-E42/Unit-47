/** Node: node for a queue. */
const LinkedList = require("./linked-list");

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
	constructor() {
		this._list = new LinkedList();
		this.first = this._list.head;
		this.last = this._list.tail;
		this.size = 0;
	}

	/** enqueue(val): add new value to end of the queue. Returns undefined. */

	enqueue(val) {
		this._list.push(val);
		this.first = this._list.head;
		this.last = this._list.tail;
		this.size++;
	}

	/** dequeue(): remove the node from the start of the queue
	 * and return its value. Should throw an error if the queue is empty. */

	dequeue() {
		if (this.isEmpty()) throw new Error("Error: Queue is empty.");
		const removed = this._list.shift();
		this.first = this._list.head;
		this.last = this._list.tail;
		this.size--;
		return removed;
	}

	/** peek(): return the value of the first node in the queue. */

	peek() {
<<<<<<< HEAD
		return this.first.val;
=======
		return this._list.getAt(0);
>>>>>>> fc8cc2c217cbe1e478937ab7dbff4fa42f3ffe24
	}

	/** isEmpty(): return true if the queue is empty, otherwise false */

	isEmpty() {
		return this._list.length === 0;
	}
}

module.exports = Queue;
