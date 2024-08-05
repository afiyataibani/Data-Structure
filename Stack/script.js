// Stack:- (LIFO = Last In First Out)

class Stack {
  constructor() {
    this.items = [];
  }

  pushh(element) {
    this.items.push(element);
    console.log(this.items);
  }

  popp() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  peekk() {
    if (this.isEmpty()) {
      return "Stack is empty ";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let stackObj = new Stack(); //Stack Object

console.log(stackObj.items); //[]
stackObj.pushh(1); // [1]
stackObj.pushh(2); // [1, 2]
stackObj.pushh(3); // [1, 2, 3]
stackObj.pushh(4); // [1, 2, 3, 4]
stackObj.pushh(5); // [1, 2, 3, 4, 5]
stackObj.pushh(6); // [1, 2, 3, 4, 5, 6]

console.log(stackObj.popp()); // 6
console.log(stackObj.items); // [1, 2, 3, 4, 5]
console.log(stackObj.peekk()); // 5
console.log(stackObj.items); // [1, 2, 3, 4, 5]
