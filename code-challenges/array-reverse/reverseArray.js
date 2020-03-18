'use strict';

let reverseArray = (arr) => {
  let newArray = [];
  for(let i = arr.length -1; i >= 0; i--) {
    newArray[newArray.length] = arr[i];
  }
  return newArray;
};
