/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack extends Array {
  push(element) {
    this.push(element);
  }

  pop() {
    if (this.length === 0) throw new Error('No elements');
    this.pop();
  }

  peek() {
    if (this.length === 0) throw new Error('Empty stack');
    return this[this.length - 1];
  }
}

const stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(7);
stack.peek();
stack.pop();
stack.peek();

module.exports = Stack;
