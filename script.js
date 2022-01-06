'use strict';

class LinkedList {
  constructor() {
    this.root = {
      data: null,
      next: null,
    };
  }

  append(value) {
    const node = {
      data: value,
      next: null,
    };

    let lastNode = this.root;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }
    lastNode.next = node;
  }

  find(value) {
    let targetNode = this.root;

    while (targetNode.data !== value && targetNode.next !== null) {
      targetNode = targetNode.next;
    }
      return targetNode.data === value ? targetNode : null ;
  }

  add(valueToAdd, valueAfter) {
    const obj = {
      data: valueToAdd,
      next: null,
    };

    let currentNode = this.root;

    while (currentNode.data !== valueAfter && currentNode.next !== null) {
      currentNode = currentNode.next;
    }
      obj.next = currentNode.next;
      currentNode.next = obj;
  }

  delete(value) {
    let deleteNode = this.root;
    let preNode;
    while (deleteNode.data !== value && deleteNode.next !== null) {
      preNode = deleteNode;  // 2
      deleteNode = deleteNode.next; // 3
    }
    preNode.next = deleteNode.next;
  }

  print() {
    console.log(this.root);
  }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append(2);
linkedList1.append(3);
linkedList1.append(4);
linkedList1.append(5);
linkedList1.delete(3);
linkedList1.print();