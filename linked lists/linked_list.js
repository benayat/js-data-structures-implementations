/* 
  interface:
  node: constructor(), toString().
  linkedList: getFirst(), getLast(), add(node), removeFirst(), draw(), reverse(), removeKNode(k), removeLast()
*/

class node {
  constructor(_value) {
    this.value = _value;
    this.next = null;
  }
  toString() {
    return `=>${this.value}`;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let current = this.head;
    while (current && current.next) {
      current = current.next ? current.next : current;
    }
    return current;
  }
  add(node) {
    if (this.head) {
      let lastNode = this.getLast();
      lastNode.next = node;
    } else {
      this.head = node;
    }
    this.size++;
  }
  removeFirst() {
    const returnString = this.head;
    if (this.head) {
      this.head = this.head.next;
      this.size--;
    }
    return returnString;
  }
  draw() {
    let current = this.head;
    let drawString = "";
    while (current) {
      drawString += current.toString();
      current = current.next;
    }
    console.log(drawString);
  }
  reverse() {
    if (this.size == 0 || this.size == 1) return;
    let previous = this.head;
    let current = this.head.next;
    let temp = current;
    while (temp) {
      temp = temp.next;
      current.next = previous;
      previous = current;
      current = temp;
      if (!temp) {
        this.head.next = null;
        this.head = previous;
      }
    }
  }
  removeKNode(k) {
    if (k > this.size) return "null";
    if (k == 1) {
      return this.removeFirst();
    }
    let counter = 1;
    let current = this.head;
    while (current && counter < k - 1) {
      current = current.next;
      counter++;
    }
    const returnNode = current.next;
    current.next = current.next.next;
    this.size--;

    return returnNode;
  }
  removeLast() {
    return this.removeKNode(this.size);
  }
  circularLinkedList() {
    let current = this.head;
    let currentDoubleJump = current;
    if (current.next) currentDoubleJump = currentDoubleJump.next.next;
    while (current && currentDoubleJump) {
      if (current == currentDoubleJump) return true;
      current = current.next;
      if (!currentDoubleJump.next) return false;
      currentDoubleJump = currentDoubleJump.next.next;
    }
    return false;
  }
}
list = new linkedList();
list.add(new node(1));
list.add(new node(2));
list.add(new node(3));
// list.draw();
list.reverse();
list.draw();

console.log(list.circularLinkedList());
const lastNode = list.getLast();
lastNode.next = list.head;
console.log(list.circularLinkedList());
lastNode.next = null;
list.draw();
console.log(list.getLast());
console.log(list.removeLast());
list.draw();
// list.removeKNode(3);
// list.add(new node(2));
// list.add(new node(4));
// list.add(new node(5));
// export { node, linkedList };
