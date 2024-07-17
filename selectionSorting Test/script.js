function selectionSorting(arr) {
  for (let i = 0; i < arr.length; i++) {
    lower_value = arr[i];
    last_index = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < lower_value) {
        lower_value = arr[j];
        last_index = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[last_index];
    arr[last_index] = temp;
  }
  return arr;
}

console.log(selectionSorting([5, 6, 4, 2, 3]));
