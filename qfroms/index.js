// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stack1 = new Stack(); // Stack for enqueue operations
        this.stack2 = new Stack(); // Stack for dequeue operations
    }

    // Add an element to the queue
    add(value) {
        this.stack1.push(value); // Push onto stack1
    }

    // Remove and return the front element of the queue
    remove() {
        if (this.stack2.data.length === 0) {
            // Move elements from stack1 to stack2 if stack2 is empty
            while (this.stack1.data.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop(); // Pop from stack2
    }

    // Peek at the front element of the queue
    peek() {
        if (this.stack2.data.length === 0) {
            // Move elements from stack1 to stack2 if stack2 is empty
            while (this.stack1.data.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.peek(); // Peek at the top of stack2
    }
}
const q = new Queue();
     q.add(1);
     q.add(2);
     q.peek();  // returns 1
     q.remove(); // returns 1
     console.log(q.remove()); // returns 2
module.exports = Queue;
