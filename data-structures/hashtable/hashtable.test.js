'use strict';

const Hashtable = require('./Hashtable.js');

describe('HashTable tests', () => {
  const map = new Hashtable(20);

  it('Adds a key/value to your hashtable', () => {
    map.add('ace', 'a playing card with a value of one');
    expect(map.contains('ace')).toBe(true);
    let index = map.hash('ace');
    expect(map.map[index].val).toEqual('a playing card with a value of one');
  });
});

/*
Write tests to prove the following functionality:

Adding a key/value to your hashtable results in the value being in the data structure
Retrieving based on a key returns the value stored
Successfully returns null for a key that does not exist in the hashtable
Successfully handle a collision within the hashtable
Successfully retrieve a value from a bucket within the hashtable that has a collision
Successfully hash a key to an in-range value
*/
