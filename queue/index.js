// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.queue = [];
      }
    
      add(element) {
        this.queue.push(element);
      }
      remove() {
        return this.queue.shift();
      }
}
const q=new Queue();
q.add(1);
q.add(3);
q.add(5);
q.add(34);
q.add(54);
console.log(q.remove())
console.log(q.remove())
module.exports = Queue;
