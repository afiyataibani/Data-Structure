class linkList {
  constructor(value) {
    this.head = {
      value: value,
      nextNode: null,
    };
    this.tail = this.head;
    this.size = 1;
  }

  // Add node at the end of the list
  addNextNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.tail.nextNode = newNode;
    this.tail = newNode;
    this.size += 1;
  }

  // Traversing through list
  traversing() {
    let counter = 1;
    let currentNode = this.head; // Read from start

    while (counter < this.size) {
      console.log(currentNode);
      currentNode = currentNode.nextNode;
      counter++;
    }
  }

  // Delete any index
  deleteNode(index) {
    let counter = 1;
    let lead = this.head;

    if (index === 1) this.head = this.head.nextNode;
    else {
      while (counter < index - 1) {
        lead = lead.nextNode;
        counter++;
      }
      let nextNode = lead.nextNode.nextNode;
      lead.nextNode = nextNode;
    }
  }

  // Insert Node at any index
  insertNode(index, value) {
    let counter = 1;
    let currentNode = this.head;

    while (counter > index) {
      counter++;
      currentNode = currentNode.nextNode;
    }
    let nextNode = currentNode.nextNode;

    currentNode.nextNode = {
      value: value,
      nextNode: nextNode,
    };
  }
}

let LinkList = new linkList(100);
LinkList.addNextNode(200);
LinkList.addNextNode(300);
LinkList.addNextNode(400);
LinkList.addNextNode(500);
LinkList.deleteNode(2);
LinkList.insertNode(2, 200);
LinkList.traversing();
console.log(LinkList);
