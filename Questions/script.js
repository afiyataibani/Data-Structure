// Question 1:
// Reverse Array: Write a function that takes an array and reverses its elements.
// Example: Input: [1, 2, 3, 4, 5]; Output: [5, 4, 3, 2, 1]

function reverse(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return arr;
}
let array = [1, 2, 3, 4, 5];
console.log(reverse(array));

// Question 2:
// Find Second Largest Element: Write a function to find the second largest element in an array.
// Example: Input: [10, 5, 20, 8]; Output: 10

function secondLargestElement(arr) {
  let largest = arr[0];
  let secondlargest = undefined;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondlargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondlargest && arr[i] !== largest) {
      secondlargest = arr[i];
    }
  }
  return secondlargest;
}

let array1 = [12, 22, 14, 45, 5];
console.log(secondLargestElement(array1));

// Question 3:
// Remove Duplicates: Write a function to remove duplicate elements from an array.
// Example: Input: [1, 2, 2, 3, 4, 4, 5]; Output: [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let duplicate = false;
    for (let j = 0; j < i; j++) {
      if (arr[i] == arr[j]) {
        duplicate = true;
        break;
      }
    }
    if (!duplicate) {
      result[result.length] = arr[i];
    }
  }
  return result;
}

let array2 = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(array2));

// Question 4:
// Move Zeros to End: Write a function to move all zeroes in an array to the end while maintaining the order of other elements.
// Example: Input: [0, 1, 0, 3, 12]; Output: [1, 3, 12, 0, 0]

function moveZerosToEnd(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
}

let array3 = [0, 1, 0, 3, 12];
console.log(moveZerosToEnd(array3));

// Question 5:
// Sum of Array Elements: Write a function that calculates the sum of all elements in an array.
// Example: Input: [1, 2, 3, 4]; Output: 10

function sumOfElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let array4 = [1, 2, 3, 4, 5];
console.log(sumOfElements(array4));

// Question 6:
// Find Missing Number: Write a function to find the missing number in a given array of n-1 elements which contains integers from 1 to n.
// Example: Input: [1, 2, 4, 5, 6]; Output: 3

function findMissingNumber(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  let expectedSum = (max * (max + 1)) / 2 - (min * (min - 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    actualSum += arr[i];
  }

  missingNumber = expectedSum - actualSum;
  return missingNumber;
}

let array5 = [42, 43, 45, 46, 47];
console.log(findMissingNumber(array5));

// Question 7:
// Rotate Array by One: Write a function to rotate the elements of an array to the right by one position.
// Example: Input: [1, 2, 3, 4, 5]; Output: [5, 1, 2, 3, 4]

function rotateElements(arr) {
  let lastElement = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = lastElement;
  return arr;
}
let array6 = [1, 2, 3, 4, 5];
console.log(rotateElements(array6));

// Question 8: ==> Doubt
// Check for Anagrams: Write a function to check if two given arrays are anagrams of each other.
// Example: Input: [1, 2, 3], [3, 2, 1]; Output: true

function areAnagrams(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  arr1.sort();
  arr2.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(areAnagrams([1, 2, 3], [3, 2, 1]));
console.log(areAnagrams([1, 2, 3], [3, 2, 2]));
console.log(areAnagrams([1, 5, 2], [2, 5, 1]));
console.log(areAnagrams([7, 9, 5], [5, 9, 7]));
console.log(areAnagrams([4, 7, 9], [1, 9, 4]));

// Question 9:
// Find Index of Element: Write a function to find the index of a given element in an array. If the element is not present, return -1.
// Example: Input: [10, 20, 30, 40], element = 30; Output: 2

function findIndex(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

let array7 = [10, 20, 30, 40, 50];
let element = 40;

console.log(findIndex(array7, element));

element = 60;

console.log(findIndex(array7, element));
