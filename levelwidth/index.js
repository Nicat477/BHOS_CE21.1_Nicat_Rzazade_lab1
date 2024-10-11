const Node = require('./node');

function levelWidth(root) {
    const widths = []; 
    const queue = [root]; 
    while (queue.length > 0) {
        const levelSize = queue.length; 
        widths.push(levelSize); 

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); 
            
           
            for (const child of node.children) {
                queue.push(child);
            }
        }
    }

    return widths; 
}

// Example usage
const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[1].add(5);

const result = levelWidth(root);
console.log(result); // Output: [1, 3, 2]


module.exports = levelWidth;
