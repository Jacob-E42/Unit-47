/** Node: node for a singly linked list. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	_get(idx) {
		let currentNode = this.head;
		let index = 0;
		while (currentNode && index <= this.length) {
			if (index === idx) return currentNode;
			currentNode = currentNode.next;
			index++;
		}
		return null;
	}

	/** push(val): add new value to end of list. */

	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
	}

	/** pop(): return & remove last item. */

	pop() {
		return this.removeAt(this.length - 1);
	}

	/** shift(): return & remove first item. */

	shift() {
		return this.removeAt(0);
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		const node = this._get(idx);
		if (node !== null) return node.val;
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		if (idx >= this.length || idx < 0) {
			throw new Error("Invalid index.");
		}
		this._get(idx).val = val;
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		if (idx < 0 || idx > this.length) throw new Error(`Invalid Index "${idx}"`);

		if (idx === 0) return this.unshift(val);
		if (idx === this.length) return this.push(val);

		const prev = this._get(idx - 1);
		const newNode = new Node(val);

		newNode.next = prev.next;
		prev.next = newNode;

		this.length++;
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		if (idx < 0 || idx >= this.length) throw new Error(`Invalid Index "${idx}"`);

		let removed;

		//special case: removing the first item
		if (idx === 0) {
			removed = this.head;
			this.head = removed.next;

			//special case: if there were only 1 or 2 items, the tail becomes the same as the head
			if (this.length < 3) this.tail = this.head;
		} else {
			const prev = this._get(idx - 1);
			removed = prev.next;
			prev.next = removed.next;

			//special case: if the tail is being removed
			if (idx === this.length - 1) this.tail = prev;
		}

		this.length--;
		return removed.val;
	}

	/** average(): return an average of all values in the list */

	average() {
		if (this.length === 0) return 0;

		let total = 0;
		let current = this.head;

		while (current) {
			let val = current.val;
			total += val;
			current = current.next;
		}
		return total / this.length;
	}
}

module.exports = LinkedList;
