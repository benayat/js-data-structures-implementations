/* 
an exersice from geeksforgeeks: 
https://www.geeksforgeeks.org/implementation-stack-javascript/
*/

// Stack class
class Stack {
  // Array is used to implement stack
  constructor() {
    this.items = [];
    this.size = 0;
  }

  // Functions to be implemented
  // push(item)
  // pop()
  // peek()
  // isEmpty()
  // printStack()
  push(element) {
    this.items[this.size++] = element;
  }
  pop() {
    this.size--;
    return this.items[this.size];
  }
  peek() {
    return this.items[this.size - 1];
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  printStack() {
    for (let i = 0; i < this.size; i++) {
      console.log(this.items[i]);
    }
  }
}
let stack = new Stack();
stack.push("first element");
stack.push("second element");
stack.push("third element");
stack.push("fourth element");
stack.push("fifth element");
stack.push("sixth element");
stack.push("seventh element");
stack.printStack();
console.log(stack.getSize());
console.log(stack.pop());
stack.printStack();
console.log(stack.peek());
