class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newN;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
  size() {
    let count = 0;
    let curr = this.head;
    while (curr) {
      count += 1;
      curr = curr.next;
    }
    return count;
  }
  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.log("Invalid Index");
      return;
    }
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
  removeTop() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
  }
  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.log("Invlaid Index");
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    if (curr.next) {
      curr.next = curr.next.next;
    }
  }
}

const list = new LinkedList();
list.addFirst(10);
list.addFirst(20);
list.addFirst(30);
list.addLast(40);
list.addLast(50);

console.log("List Contents");
list.print();
console.log("Size of LinkeList:", list.size());
list.addAt(2, 60);
list.print();
console.log("---------------");
list.removeTop();
list.print();
console.log("---------------");
list.removeLast();
list.print();
console.log("---------------");
list.removeAt(2);
list.print();
