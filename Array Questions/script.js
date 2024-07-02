// 1. Create an array and initialize it with values, then print the elements of the array.
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  let printing_array = document.getElementById("printing_array");
  printing_array.innerHTML += `Element at index ${i} is ${arr[i]}<br>`;
}

// 2. Update a specific element in the array.
let upd = [1, 2, 3, 4, 5];
let orignalArray = document.getElementById("orignalArray");
for (let i = 0; i < upd.length; i++) {
  orignalArray.innerHTML += `Element at index ${i} is ${arr[i]}<br>`;
}

function updateArray() {
  let index = parseInt(document.getElementById("index").value);
  let newValue = document.getElementById("newValue").value;
  let updatedArray = document.getElementById("updatedArray");
  if (index >= 0 && index < upd.length) {
    upd[index] = newValue;
    updatedArray.innerHTML = "";
    for (let i = 0; i < upd.length; i++) {
      updatedArray.innerHTML += `Element at index ${i} is ${upd[i]}<br>`;
    }
  }
}

// 3. Delete an element from an array by shifting the remaining elements.
let data = [1, 2, 3, 4, 5];
let og = document.getElementById("og");
for (let i = 0; i < upd.length; i++) {
  og.innerHTML += `Element at index ${i} is ${data[i]}<br>`;
}

function deleteData() {
  let indexx = parseInt(document.getElementById("indexx").value);
  let deleteData = document.getElementById("deleteData");
  for (let i = indexx; i < data.length - 1; i++) {
    if (i == indexx) {
      data[i] = data[i + 1];
    }
  }
  data.length = data.length - 1;
  for (let i = 0; i < data.length; i++) {
    deleteData.innerHTML += `Element at index ${i} is ${data[i]}<br>`;
  }
}

// 4. Add an element to the end of the array.
let add = [1, 2, 3, 4, 5];
let orignal = document.getElementById("orignal");
for (let i = 0; i < add.length; i++) {
  orignal.innerHTML += `Element at index ${i} is ${add[i]}<br>`;
}

function addElement() {
  let num = parseInt(document.getElementById("num").value);
  let added = document.getElementById("added");

  add.push(num);
  for (let i = 0; i < add.length; i++) {
    added.innerHTML += `Element at index ${i} is ${add[i]}<br>`;
  }
}

// 5. Find the index of a specific element in the array.
let elementIndex = [1, 2, 3, 4, 5];
let array = document.getElementById("array");
for (let i = 0; i < elementIndex.length; i++) {
  array.innerHTML += `Element ${i + 1} is ${elementIndex[i]}<br>`;
}

function searchIndex() {
  let el = parseInt(document.getElementById("el").value);
  let search = document.getElementById("search");
  for (let i = 0; i < elementIndex.length; i++) {
    if (elementIndex[i] == el) {
      search.innerHTML = `Index of ${el} is ${i}`;
      return;
    }
  }
  search.innerHTML = `Element ${el} not found in the array`;
}

// 6. Create an array of integers and find the sum of all the elements in the array.
let addition = [1, 2, 3, 4, 5];
let integers = document.getElementById("integers");
for (let i = 0; i < addition.length; i++) {
  integers.innerHTML += `Element at index ${i} is ${add[i]}<br>`;
}

let sum = document.getElementById("sum");
let Sum = 0;
for (let i = 0; i < addition.length; i++) {
  Sum += addition[i];
}
sum.innerHTML += `Sum of elements of above array is ` + Sum;

// 7. Add a new element at a specific index in the array.
let elements = [1, 2, 3, 4, 5];
let orignalElements = document.getElementById("orignalElements");
let elementAdded = document.getElementById("elementAdded");
let place = document.getElementById("place");
let value = document.getElementById("value");

for (let i = 0; i < elements.length; i++) {
  orignalElements.innerHTML += `Element at index ${i} is ${elements[i]}<br>`;
}

function addNewElement() {
  let place = parseInt(document.getElementById("place").value);
  let value = parseInt(document.getElementById("value").value);

  for (let i = elements.length; i > place; i--) {
    elements[i] = elements[i - 1];
  }

  elements[place] = value;

  elementAdded.innerHTML = "";
  for (let i = 0; i < elements.length; i++) {
    elementAdded.innerHTML += `Element at index ${i} is ${elements[i]}<br>`;
  }
}

// 8. Update multiple elements in the array simultaneously.
let lines = [1, 2, 3, 4, 5];
let orignalLines = document.getElementById("orignalLines");
let elementUpdated = document.getElementById("elementUpdated");

for (let i = 0; i < lines.length; i++) {
  orignalLines.innerHTML += `Element at index ${i} is ${lines[i]}<br>`;
}

function updateMultipleElements() {
  let startIndex = parseInt(document.getElementById("startIndex").value);
  let endIndex = parseInt(document.getElementById("endIndex").value);
  let newValueUpdates = parseInt(
    document.getElementById("newValueUpdates").value
  );

  for (let i = startIndex; i <= endIndex; i++) {
    lines[i] = newValueUpdates;
  }

  elementUpdated.innerHTML = "";
  for (let i = 0; i < lines.length; i++) {
    elementUpdated.innerHTML += `Element at index ${i} is ${lines[i]}<br>`;
  }
}

// 9. Delete all occurrences of a specific element in the array.
let elementss = [1, 2, 3, 2, 4, 2, 5];
let orignalElementss = document.getElementById("orignalElementss");
let elementDeleted = document.getElementById("elementDeleted");
let valueToDelete = document.getElementById("valueToDelete");

for (let i = 0; i < elementss.length; i++) {
  orignalElementss.innerHTML += `Element at index ${i} is ${elementss[i]}<br>`;
}

function deleteAllOccurrences() {
  let valueToDeleteValue = parseInt(valueToDelete.value);
  let newArray = [];

  for (let i = 0; i < elementss.length; i++) {
    if (elementss[i] !== valueToDeleteValue) {
      newArray.push(elementss[i]);
    }
  }

  elementss = newArray;

  elementDeleted.innerHTML = "";
  for (let i = 0; i < elementss.length; i++) {
    elementDeleted.innerHTML += `Element at index ${i} is ${elementss[i]}<br>`;
  }
}

// 10. Find  the min and max elements in an array.
let vars = [12, 5, 8, 3, 15, 20, 1];
let ogElements = document.getElementById("ogElements");
let minMaxElements = document.getElementById("minMaxElements");

for (let i = 0; i < vars.length; i++) {
  ogElements.innerHTML += `Element at index ${i} is ${vars[i]}<br>`;
}

function findMinMax() {
  let minElement = vars[0];
  let maxElement = vars[0];

  for (let i = 1; i < vars.length; i++) {
    if (vars[i] < minElement) {
      minElement = vars[i];
    }
    if (vars[i] > maxElement) {
      maxElement = vars[i];
    }
  }

  minMaxElements.innerHTML = `Minimum element is ${minElement} and Maximum element is ${maxElement}`;
}
