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
class Stack {
  constructor (el = []) {
    this.el = el;
  }

  push(element) {
    this.el.push(element);
  }

  pop() {
    if (this.el.length === 0) throw new Error('No elements');
    return this.el.pop();
  }

  peek() {
    if (this.el.length === 0) throw new Error('Empty stack');
    return this.el[this.el.length - 1];
  }
}

module.exports = Stack;
