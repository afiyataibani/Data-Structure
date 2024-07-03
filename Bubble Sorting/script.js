// Bubble Sorting in Ascending Order
function bubbleSortingAsc(arr) {
  let swap;
  do {
    swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap);
  return arr;
}

let arr = [100, 25, 10, 7, 9, 14, 26];
let orignal = document.getElementById("orignal");
for (let i = 0; i < arr.length; i++) {
  orignal.innerHTML += arr[i] + ", ";
}
let asc = document.getElementById("asc");
asc.innerHTML =
  "Array in Ascending Order is: " + bubbleSortingAsc(arr).join(", ");

// Bubble Sorting in Descending Order
function bubbleSortingDsc(array) {
  let swap;
  do {
    swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap);
  return array;
}

let array = [100, 25, 10, 7, 9, 14, 26];
let orignalArray = document.getElementById("orignalArray");
for (let i = 0; i < arr.length; i++) {
    orignalArray.innerHTML += arr[i] + ", ";
}
let dsc = document.getElementById("dsc");
dsc.innerHTML =
  "Array in Descending Order is: " + bubbleSortingDsc(arr).join(", ");
