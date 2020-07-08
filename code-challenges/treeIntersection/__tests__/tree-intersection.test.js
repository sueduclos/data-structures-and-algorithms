'use strict';

const treeIntersection = require('../tree-intersection');

describe('tree-intersection', () => {
  it('returns array of values found in both trees', () => {
    let tree1 = { val: 100 };
    tree1.left = { val: 150 };
    tree1.right = { val: 200 };

    let tree2 = { val: 100 };
    tree2.left = { val: 150 };

    let values = treeIntersection(tree1, tree2);

    expect(values).toEqual([100, 150]);
  });