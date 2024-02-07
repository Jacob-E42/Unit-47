/** Node: node for a queue. */

// class Node {
// 	constructor(val) {
// 		this.val = val;
// 		this.next = null;
// 	}
// }

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

// class Queue {

// Queues
// Make a Queue class. It should include methods for enqueuing, dequeuing, peeking, and checking if the queue is empty.

// Make it throw an error if you try to dequeue from an empty queue.

// Stacks

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		const newNode = new Node(val);
		if (this.size === 0) {
			this.first = newNode;
		} else if (this.size === 1) {
			this.first.next = newNode;
		} else {
			this.last.next = newNode;
		}
		this.last = newNode;
		this.size++;
	}

	dequeue() {
		if (this.size === 0) throw new Error("There are no items to dequeue");
		const val = this.first.val;
		const secondNode = this.first.next;
		this.first = secondNode || null;
		this.size--;
		return val;
	}
}

module.exports = Queue;
