'use strict';

const mergeSort = array => {
  if(array.length < 2) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  const sortedArray = [];

  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  while(left.length) sortedArray.push(left.shift());
  while(right.length) sortedArray.push(right.shift());

  return sortedArray;
};
console.log(mergeSort([8,4,23,42,16,15]));
