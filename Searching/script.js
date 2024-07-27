// Linear Searching
let array = [25, 15, 17, 7, 14, 34];
let search = 7;

let result = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === search) {
      return i;
    }
  }
};

console.log(result(array));

// Binary Searching
let array1 = [25, 15, 17, 7, 14, 34];
let startValue = 0;
let endValue = array1.length - 1;
let searchValue = 17;

function binarySearching(array) {
  while (startValue <= endValue) {
    let mid = startValue + Math.floor((endValue - startValue) / 2);
    if (array[mid] === searchValue) {
      return mid;
    } else if (searchValue < array[mid]) {
      endValue = mid - 1;
    } else {
      startValue = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearching(array1));
