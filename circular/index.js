// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
    }
}

function circular(list) {
    if (!list.head) return false; // Empty list is not circular

    let slow = list.head; // Tortoise
    let fast = list.head; // Hare

    while (fast && fast.next) {
        slow = slow.next;           // Move slow by 1
        fast = fast.next.next;     // Move fast by 2

        if (slow === fast) {
            return true; // Cycle detected
        }
    }
    
    return false; // No cycle detected
}

// Example usage:

const l = new List();
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');

    l.head = a;
    a.next = b;
    b.next = c;
    c.next = null;
console.log(circular(l));
module.exports = circular;
