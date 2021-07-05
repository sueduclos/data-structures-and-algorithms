'use strict';

class Node {
  constructor(val) {
    this.animal = val;
    this.next = null;
  }
}

class AnimalShelter {
  constructor () {
    this.front = null;
    this.rear = null;
  }

  enqueue(animal) {
    let newNode = new Node(animal);

    if (!this.front && !this.rear) {
        this.front = newNode;
        this.rear - newNode;
        return;
    }

    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue(pref) {
    if (!(pref ==='dog' || pref === `cat`)) return null;

    let currentNode = this.front;
    let prevNode = null;
    let foundAnimal = null;

    while(currentNode) {
      let animal = currentNode.val;

      if(animal.species === pref)
        if (!prevNode) {
          this.front = currentNode.next;
          currentNode.next = null;
          return currentNode;
        }
    }

  }
}
