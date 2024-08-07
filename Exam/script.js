// 1. Reverse a string using stack
function reverseString(str) {
  let stack = new Array(str.length);
  let top = -1;

  for (let i = 0; i < str.length; i++) {
    top++;
    stack[top] = str[i];
  }

  let reverse = "";

  for (let i = 0; i < str.length; i++) {
    reverse += stack[top];
    top--;
  }

  return reverse;
}

console.log(reverseString("reverse"));
console.log(reverseString("afiya"));
console.log(reverseString("taibani"));

// 2. Reverse a link list
class linkList {
  constructor(value) {
    this.head = {
      value: value,
      nextNode: null,
    };
    this.tail = this.head;
    this.size = 1;
  }

  addNextNode(nodeData) {
    let newNode = {
      value: nodeData,
      nextNode: null,
    };
    this.tail.nextNode = newNode;
    this.tail = newNode;
    this.size += 1;
  }

  traversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      console.log(currentNode.value);
      currentNode = currentNode.nextNode;
      counter++;
    }
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;
    this.tail = this.head;

    while (current !== null) {
      next = current.nextNode;
      current.nextNode = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

let obj = new linkList(100);
obj.addNextNode(200);
obj.addNextNode(300);
obj.addNextNode(400);
obj.addNextNode(500);

console.log("Original list:");
obj.traversing();

obj.reverse();

console.log("Reversed list:");
obj.traversing();

// Bubble Sorting
function bubbleSorting(arr) {
  let swap;
  do {
    swap = false;
    for (let i = 0; i < arr.length; i++) {
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

let arr = [100, 25, 10, 7, 9, 14, 17, 26];
console.log(bubbleSorting(arr));
