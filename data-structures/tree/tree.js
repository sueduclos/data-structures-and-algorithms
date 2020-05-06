'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(root = this.root) {
    if (!root)
      return;
    
    let rootArr = [];
    let leftArr = [];
    let rightArr = [];

    rootArr.push(root.val);

    if (root.left) {
      let leftArr = this.preOrder(root.left);
    }
    
    if (root.right) {
      let rightArr = this.preOrder(root.right);
    }
    
    rootArr = [...rootArr, ...leftArr, ...rightArr]

    return rootArr;
  }

  inOrder()

  postOrder()
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(val) {
    if (!this.root) {
      this.root = new Node(val);
      return;
    }

    let currentNode = this.root;

    while(currentNode) {
      if (currentNode.val > val)
         if (!currentNode.left) {
           currentNode.left = new Node(val);
           return;
         } else currentNode = currentNode.left;

      else if (currentNode.val < val)
        if (!currentNode.right) {
          currentNode.right = new Node(val);
          return;
        } else currentNode = currentNode.right;

      else if (currentNode.val === val)
        return;
    }
  }

  contains(val) {

  }

}

module.exports = {Node, Binary, BinarySearchTree};
