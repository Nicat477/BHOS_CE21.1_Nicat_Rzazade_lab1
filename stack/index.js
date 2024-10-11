// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor(){
        this.items=[];
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if (this.isEmpty()) {
            return null; // or throw an error
        }
        return this.items.pop();
    }
    peek(){
        if (this.isEmpty()) {
            return null; // or throw an error
        }
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const s=new Stack();
s.push(1);
s.push(2);
s.push(4);
s.push(9);
s.push(8);
console.log(s.pop());

console.log(s.peek())

module.exports = Stack;
