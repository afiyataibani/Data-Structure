class circularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.item = new Array(capacity);
    this.front = -1;
    this.rear = -1;
  }

  enqueue(element) {
    if ((this.rear + 1) % this.capacity === this.front) {
      return "Queue is full";
    }
    if (this.front === -1) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.capacity;
    this.item[this.rear] = element;
  }

  dequeue() {
    if (this.front === -1) {
      return "Queue is empty";
    }

    let item = this.item[this.front];

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }
    return item;
  }

  frontItem() {
    if (this.front === -1) return "Queue is empty";

    return this.item[this.front];
  }

  isEmpty() {
    return this.front === -1;
  }

  isFull() {
    return (this.rear + 1) % this.capacity === this.front;
  }
}

let obj = new circularQueue(4);
console.log(obj.isEmpty()); // true
obj.enqueue(10);
obj.enqueue(20);
obj.enqueue(30);
obj.enqueue(40);
obj.enqueue(50);
console.log(obj.isFull()); // true
console.log(obj.item); // [10,20,30,40]
console.log(obj.frontItem()); // 10
console.log(obj.dequeue()); // 10
console.log(obj.frontItem()); // 20
console.log(obj.rear); // 3
console.log(obj.isEmpty()); // false
