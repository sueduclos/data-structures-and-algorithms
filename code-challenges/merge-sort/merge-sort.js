function mergeSort (arr) {
  if(arr.length <= 1) {
    return arr;
  }

  const middle = math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return mergeSort;
}