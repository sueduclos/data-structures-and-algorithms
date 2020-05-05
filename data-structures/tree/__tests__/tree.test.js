'use strict';
/*
You can successfully instantiate an empty tree
You can successfully instantiate a tree and add a single root node
You can successfully add a left and right child to a single root node
You can successfully do a preOrder traversal
You can successfully do an inOrder traversal
You can successfully do a postOrder traversal
You can successfully add a value to a binary search tree
You can search a binary search tree for a value and get the correct true/false result
*/

const tree = require('../tree.js');
const BinaryTree = tree.BinaryTree;
const BinarySearchTree = tree.BinarySearchTree;

describe('tree test', () => {
  it('can instantiate an empty tree', () => {
    let BST = new BinarySearchTree();

    expect(BST.root).toBeFalsy();
  });
  // it('instantiate a tree and a single root node', () => {
  //   let BST = new BinarySearchTree();

  //   expect
  // })
