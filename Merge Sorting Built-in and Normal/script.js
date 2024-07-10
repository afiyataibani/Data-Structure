// Built-in Merge Sorting
function mergeSorting(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  // Division
  let left = mergeSorting(arr.slice(0, mid)); //Recursion
  let right = mergeSorting(arr.slice(mid)); //Recursion

  return merge(left, right);
}

function merge(left, right) {
  let sortedArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}

console.log(mergeSorting([5, 45, 25, 28, 7]));

// Normal Merge Sorting
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let left = customSlice(arr, 0, mid);
  let right = customSlice(arr, mid, arr.length);

  return merging(mergeSort(left), mergeSort(right));
}

function merging(left, right) {
  let sortArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      customPush(sortArray, customShift(left));
    } else {
      customPush(sortArray, customShift(right));
    }
  }

  return [...sortArray, ...left, ...right];
}

function customSlice(arr, start, end) {
  let result = [];

  for (let i = start; i < end; i++) {
    customPush(result, arr[i]);
  }

  return result;
}

function customShift(arr) {
  if (arr.length === 0) return undefined;
  let firstElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.length = arr.length - 1; // remove last element

  return firstElement;
}

function customPush(arr, element) {
  arr[arr.length] = element; // add element to the end
}

console.log(mergeSort([25, 65, 28, 26, 79]));
