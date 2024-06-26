let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let elementValue = document.getElementById("elementValue");
for (var i = 0; i < array.length; i++) {
  elementValue.innerHTML += `<br> Array ${i} is ${array[i]}`;
}

function getElement() {
  let element = document.getElementById("element").value;
  let value = parseInt(element);
  if (value >= 0 && value <= array.length) {
    alert(`Element at index ${value} is ${array[value]}`);
  } else {
    alert("Invalid Choice");
  }
}

function insertElement() {
  let inserting = document.getElementById("inserting").value;
  let newValue = 20;
  for (var i = array.length - 1; i >= 0; i--) {
    if (i >= inserting) {
      array[i + 1] = array[i];
    }
    if (inserting == i) {
      array[i] = newValue;
    }
  }

  let InsertedValue = document.getElementById("InsertedValue");
  for (var i = 0; i < array.length; i++) {
    InsertedValue.innerHTML += `<br> Array ${i} is ${array[i]}`;
  }
}
