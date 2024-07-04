// Ascending Order
function selectionSortAsc(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lower_value = arr[i];
    let last_index_value = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < lower_value) {
        lower_value = arr[j];
        last_index_value = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[last_index_value];
    arr[last_index_value] = temp;
  }
  return arr;
}

let arr = [10, 25, 12, 47, 36];
let orignal = document.getElementById("orignal");
for (let i = 0; i < arr.length; i++) {
  orignal.innerHTML += arr[i] + ", ";
}
let asc = document.getElementById("asc");
asc.innerHTML =
  "Array in Ascending Order is: " + selectionSortAsc(arr).join(", ");

// Descending Order
function selectionSortDesc(array) {
  for (let i = 0; i < array.length; i++) {
    let higher_value = array[i];
    let last_index_value = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] > higher_value) {
        higher_value = array[j];
        last_index_value = j;
      }
    }
    let temp = array[i];
    array[i] = array[last_index_value];
    array[last_index_value] = temp;
  }
  return array;
}

let array = [10, 25, 12, 47, 36];
let orignalArray = document.getElementById("orignalArray");
for (let i = 0; i < array.length; i++) {
  orignalArray.innerHTML += array[i] + ", ";
}
let dsc = document.getElementById("dsc");
dsc.innerHTML =
  "Array in Descending Order is: " + selectionSortDesc(array).join(", ");
