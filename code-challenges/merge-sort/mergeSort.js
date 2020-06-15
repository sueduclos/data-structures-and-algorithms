'use strict';

const mergeSort = array => {
  //check if array can be split
  if(array.length < 2) {
    return array;
  }
  //get the middle index
  const middle = Math.floor(array.length / 2);
  //split array into two sides
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);
  //recursion to continue splitting
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  //create new array
  const sortedArray = [];
  //check if left and right array are empty
  while(left.length && right.length) {
    //find the lower value
    if(left[0] <= right[0]) {
      //add left value
      sortedArray.push(left.shift());
    } else {
      //add right value
      sortedArray.push(right.shift());
    }
  }
  //merge left array
  while(left.length) sortedArray.push(left.shift());
  //merge right array
  while(right.length) sortedArray.push(right.shift());
  //return the sorted array
  return sortedArray;
};
// console.log(mergeSort([8,4,23,42,16,15]));
module.exports = mergeSort;
