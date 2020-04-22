# Stacks and Queues

## Challenge

* Create a `Node` class that has properties for the value stored in the `Node`, and a pointer to the next node.

* Create a `Stack` class that has a top property. It creates an empty `Stack` when instantiated.Use the following methods:
* `push`
* `pop`
* `peek`
* `isEmpty`

* Create a `Queue` class that has a front property. It creates an empty `Queue` when instantiated. Use the following methods:
* `enqueue`
* `dequeue`
* `peek`
* `isEmpty`

## Approach & Efficiency

Stacks and Queues are `O(1)` operation in time because it does not matter how many other items live in the `queue`; it always takes the same amount of time to perform the operation. Pushing a Node onto a stack will always be an `O(1)` operation. This is because it takes the same amount of time no matter how many Nodes `(n)` you have in the `stack`.

## Testing

* Run test files: `npm test stack.test.js` and `npm test queue.test.js`
