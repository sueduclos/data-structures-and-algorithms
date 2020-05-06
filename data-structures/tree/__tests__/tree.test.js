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

const trees = require('../tree.js');
const Node = trees.Node;
const BinaryTree = trees.BinaryTree;
const BinarySearchTree = trees.BinarySearchTree;

describe('Binary Tree tests', () => {
  it('can instantiate an empty tree', () => {
    let tree = new BinaryTree();
    
    expect(tree).toBeDefined();
    expect(tree.root).toBe(null);
  });

  it('can successfully instantiate a tree and add a single root node', () => {
    let tree = new BinaryTree();
    let newNode = new Node('A');
    tree.root = newNode;
    
    expect(tree).toBeDefined();
    expect(tree.root).toBeDefined();
    expect(tree.root.val).toBe('A');
  });

 

describe('Binary Search Tree tests', () => {
  it('can correctly add a node to the tree', () => {
    let tree = new BinarySearchTree();

    tree.root = new Node(15);
    tree.root.left = new Node(8);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(12);
    tree.root.right = new Node(20);
    tree.root.right.right = new Node(22);

    tree.add(6);
    tree.add(14);
    tree.add(19);
    tree.add(16);
  })
});
