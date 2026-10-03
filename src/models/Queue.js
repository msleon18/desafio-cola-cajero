// src/models/Queue.js
export class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.length > 0 ? this.items.shift() : null;
  }

  front() {
    return this.items.length > 0 ? this.items[0] : null;
  }

  isEmpty() {
    this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  getItems() {
    return [...this.items];
  }
}