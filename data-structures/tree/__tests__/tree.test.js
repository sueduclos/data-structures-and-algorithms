
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

  it('can successfully add a left and right child to a single root node', () => {
    let tree = new BinaryTree();
    let newNode = new Node('A');
    tree.root = newNode;

    let leftChild = new Node('B')
    let rightChild = new Node('C');

    tree.root.left = leftChild;
    tree.root.right = rightChild;

    expect(tree).toBeDefined();
    expect(tree.root).toBeDefined();
    expect(tree.root.val).toBe('A');

    expect(tree.root.left).toBeDefined();
    expect(tree.root.left.val).toBe('B');

    expect(tree.root.right).toBeDefined();
    expect(tree.root.right.val).toBe('C');
  });

  it('can successfully do a preOrder traversal', () => {
    let tree = new BinaryTree();

    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right = new Node('C');
    tree.root.right.right = new Node('F');

   let traversalResults = tree.preOrder();
   expect(traversalResults).toBe(['A', 'B', 'D', 'E', 'C', 'F']);
  });

  it('can successfully do a inOrder traversal', () => {
    let tree = new BinaryTree();

    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right = new Node('C');
    tree.root.right.right = new Node('F');

   let traversalResults = tree.inOrder();
   expect(traversalResults).toBe(['D', 'B', 'E', 'A', 'C', 'F']);
  });

  it('can successfully do a postOrder traversal', () => {
    let tree = new BinaryTree();

    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right = new Node('C');
    tree.root.right.right = new Node('F');

   let traversalResults = tree.postOrder();
   expect(traversalResults).toBe(['D', 'E', 'B', 'F', 'C', 'A']);
  });
});

describe('Binary Search Tree tests', () => {
  it('can successfully add a value to a binary search tree', () => {
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

    let traversalResults = tree.preOrder();
    expect(traversalResults).toBe([15, 8, 4, 6, 12, 14, 20, 19, 16, 22]);
  });

  it('can search a binary search tree for a value and get the correct true/false result', () => {
    let tree = new BinarySearchTree();

    tree.root = new Node(15);
    tree.root.left = new Node(8);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(12);
    tree.root.right = new Node(20);
    tree.root.right.right = new Node(22);

   
    expect(tree.contains(4)).toBe(true);
    expect(tree.contains(17)).toBe(false);
  });
});
