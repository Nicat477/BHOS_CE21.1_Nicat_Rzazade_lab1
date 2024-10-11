// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data; 
        this.children = []; 
    }

    
    add(childNode) {
        this.children.push(childNode);
    }

    
    remove(childNode) {
        this.children = this.children.filter(child => child !== childNode);
    }
}

class Tree {
    constructor() {
        this.root = null; 
    }

    // Breadth-first traversal
    traverseBF(callback) {
        if (!this.root) return; 

        const queue = [this.root]; 

        while (queue.length > 0) {
            const node = queue.shift(); 
            callback(node); 

            
            for (const child of node.children) {
                queue.push(child);
            }
        }
    }

    
    traverseDF(callback) {
        if (!this.root) return; 

        const stack = [this.root]; 

        while (stack.length > 0) {
            const node = stack.pop(); 
            callback(node); 

            
            for (const child of node.children) {
                stack.push(child);
            }
        }
    }
}

module.exports = { Tree, Node };
