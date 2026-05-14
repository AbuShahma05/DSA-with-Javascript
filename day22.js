class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Add to tail
  addItem(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  // Add to head
  addToHead(value) {
    this.head = new Node(value, this.head);
    this.length++;
  }

  // Add at specific index
  addAtIndex(index, value) {
    if (index < 0 || index > this.length) return -1;
    if (index === 0) return this.addToHead(value);
    if (index === this.length) return this.addItem(value);

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    current.next = new Node(value, current.next);
    this.length++;
  }

  // Get value at index
  get(index) {
    if (index < 0 || index >= this.length) return -1;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  // Delete node at index
  delete(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Invalid index");
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
    }
    this.length--;
  }

  // Print list (for debugging)
  print() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

// Usage
const myList = new LinkedList();
myList.addItem(2);
myList.addItem(4);
myList.addItem(5);
myList.addToHead(1);
myList.addAtIndex(2, 3);
myList.delete(2);
myList.print(); // Output: 1 -> 2 -> 4 -> 5
