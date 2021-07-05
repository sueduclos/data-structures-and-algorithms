'use strict';

import { appendToMemberExpression, isModuleDeclaration } from "@babel/types";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(val) {
    try {
      let newNode = new Node(val);
  
      newNode.next = this.head;
      this.head = newNode;

    } catch 
  }

  // includes(currVal) {
  //     let currNode = this.head;

  //     while(currNode != null) 

  // }

  toString() {
    let currNode = this.head;
    let str = '';

    while (currNode != null) {
      str += '[' + currNode.val + '] -> ';
      currNode = currNode.next; 
    }
    
    str += 'null';
    console.log(str);
  }
}

// append(val) {
//   let newNode = new Node(val);

// }

// insertBefore(val, newVal) {

// }

// insertAfter(val, newVal) {

// }

module.exports = {Node, LinkedList};

