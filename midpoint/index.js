const { LinkedList } = require('./linkedlist');

function midpoint(list) {
    if (!list.head) return null;

    let slow = list.head;
    let fast = list.head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}


const list = new LinkedList();
list.insertLast('a');
list.insertLast('b');
list.insertLast('c');
list.insertLast('d'); 
list.insertLast('e');

const midNode = midpoint(list);
console.log(midNode.data); 

const list2 = new LinkedList();
list2.insertLast('a');
list2.insertLast('b');
list2.insertLast('c'); 

const midNode2 = midpoint(list2);
console.log(midNode2.data); 
module.exports = midpoint;
