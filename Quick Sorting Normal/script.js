// Quick Sorting Without Built-in
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  // Rightmost element of array
  let pivot = arr[high];
  let i = low - 1;

  // Compare each element with pivot
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      // Swapping i and j
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Swap pivot with greater
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  // Return Pivot index
  return i + 1;
}

let array = [22, 26, 7, 3, 9, 24];
console.log(quickSort(array));
