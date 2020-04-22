'use strict';

class Node {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(val) {
        let nodePush = new Node(val);

        if (this.isEmpty()) {
            this.top = nodePush;
            return;
        }

        nodeToPush.next = this.top;
        this.top = nodePush;
    }

    pop() {
        let nodePop = this.top;

        if (this.isEmpty()) {
            throw 'NullReferenceException';
            return;
        }

        this.top = this.top.next;
        nodePop.next = null;

        return nodePop;
    }

    peek() {
        if (this.top) return this.top.val;
          throw 'NullReferenceException';
    }

    isEmpty() {
        return !this.top;
    }
}

module.exports = Stack;
