// function Node(value, next = null) {
//   this.value = value;
//   this.next = next;
// }

// // const node = new Node(2)
// // console.log(node);

// function LinkedList() {
//   this.head = null;
//   this.length = 0;
// }

// // adding to tail of linkedlist
// LinkedList.prototype.addItem = function (value) {
//   const node = new Node(value);
//   if (this.head === null) {
//     this.head = node;
//   } else {
//     let currentNode = this.head;
//     while (currentNode.next !== null) {
//       currentNode = currentNode.next;
//     }
//     currentNode.next = node;
//   }
//   this.length++;
// };

// // add item to head
// LinkedList.prototype.addToHead = function (value) {
//   const node = new Node(value);
//   node.next = this.head;
//   this.head = node;

//   this.length++;
// };

// //
// LinkedList.prototype.addAtIndex = function (index, value) {
//   if (index < 0 || index >= this.length) {
//     return -1;
//   }

//   if (index === 0) {
//     this.addToHead(value);
//     return;
//   }
//   if (index === this.length - 1) {
//     this.addItem(value);
//     return;
//   }

//   const node = new Node(value);
//   let currentNode = this.head;
//   let currentIndex = 0;

//   while (currentIndex < index - 1) {
//     currentNode = currentNode.next;
//     currentIndex++;
//   }

//   node.next = currentNode.next;
//   currentNode.next = node;
//   this.length++;
// };

// LinkedList.prototype.get = function (value) {
//   if (index < 0 || index >= this.length) {
//     return -1;
//   }

//   if (index === 0) {
//     return this.head.value;
//   } else {
//     let currentNode = this.head;
//     let currentIndex = 0;

//     while (currentIndex < index) {
//       currentNode = currentNode.next;
//       currentIndex++;
//     }
//     return currentNode.value;
//   }
// };

// LinkedList.prototype.delete = function (index) {
//   if (index < 0 || index >= this.length) {
//     // return -1 or we can write like this
//     throw new Error("Please enter correct index value");
//   }
//   if (index === 0) {
//     this.head = this.head.next;
//   } else {
//     let currentNode = this.head;
//     let currentIndex = 0;

//     while (currentIndex < index - 1) {
//       currentNode = currentNode.next;
//       currentIndex++;
//     }

//     currentNode.next = currentNode.next.next;
//   }
//   this.length--;
// };

// // add item to head
// const myLinkedList = new LinkedList();
// myLinkedList.addItem(2);
// myLinkedList.addItem(4);
// myLinkedList.addItem(5);
// myLinkedList.addToHead(1);
// myLinkedList.addAtIndex(2, 3);
// myLinkedList.delete(2);
// console.log(myLinkedList);
// // console.log(myLinkedList.get(2));


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
