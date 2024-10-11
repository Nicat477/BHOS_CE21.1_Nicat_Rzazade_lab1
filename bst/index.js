// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data) {
            // Insert in the left subtree
            if (this.left === null) {
                this.left = new Node(data);
            } else {
                this.left.insert(data);
            }
        } else if (data > this.data) {
            // Insert in the right subtree
            if (this.right === null) {
                this.right = new Node(data);
            } else {
                this.right.insert(data);
            }
        }
        // If data is equal, do not insert duplicates (optional behavior)
    }
    contains(data) {
        if (data < this.data) {
            // Search in the left subtree
            return this.left ? this.left.contains(data) : null;
        } else if (data > this.data) {
            // Search in the right subtree
            return this.right ? this.right.contains(data) : null;
        } else {
            // Data is found
            return this;
        }
    }
}
const node = new Node(10);
    node.insert(5);
    node.insert(15);
    node.insert(20);
    node.insert(0);
    node.insert(-5);
    node.insert(3);
    const three = node.left.left.right
    console.log(three);
    console.log(node.contains(3))
    

module.exports = Node;
