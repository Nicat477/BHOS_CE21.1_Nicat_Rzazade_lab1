// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

const { LinkedList } = require('./linkedlist');

function fromLast(list, n) {
    let firstPointer = list.head;
    let secondPointer = list.head;

    // Move the first pointer n nodes ahead
    for (let i = 0; i < n; i++) {
        if (firstPointer) {
            firstPointer = firstPointer.next;
        }
    }

    // Move both pointers until the first one reaches the end
    while (firstPointer) {
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next;
    }

    return secondPointer; // This will be the nth node from the end
}

// Example usage
const list = new LinkedList();
list.insertLast('a'); // index 3
list.insertLast('b'); // index 2
list.insertLast('c'); // index 1
list.insertLast('d'); // index 0

console.log(fromLast(list, 2).data); // Should output 'b'


module.exports = fromLast;
