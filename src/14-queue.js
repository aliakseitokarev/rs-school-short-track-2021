const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.val = [];
  }

  get size() {
    const result = this.val.length;
    return result;
  }

  enqueue(element) {
    const currlist = new ListNode(element);
    this.val.push(element);
    if (this.front !== null) {
      this.back.next = currlist;
      this.back = currlist;
    } else {
      this.front = currlist;
      this.back = currlist;
    }
  }

  dequeue() {
    this.front = this.front.next;
    const result = this.val.shift();
    return result;
  }
}

module.exports = Queue;
