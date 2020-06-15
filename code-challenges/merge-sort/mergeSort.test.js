const mergeSort = require('./mergeSort.js');

describe('Happy Path', () => {
  it ('can sort a given array', () => {
    let array = [8,4,23,42,26,15];

    expect(mergeSort(array).toEqual([4,8,15,26,23,42]));
  });

  it ('can sort a reverse sorted array', () => {
    let array = [20,18,12,8,5,-2];

    expect(mergeSort(array).toEqual([-2,5,8,12,18,20]));
  });

  it ('can sort an array with duplicate values', () => {
    let array = [5,12,7,5,5,7];

    expect(mergeSort(array).toEqual([5,5,5,7,7,12]));
  });

  it('can sort an array that does not have even number of values', () => {
    let array = [8,4,23,42,15];
    expect(mergeSort(array).toEqual([4,8,15,23,42]));
  });
});


