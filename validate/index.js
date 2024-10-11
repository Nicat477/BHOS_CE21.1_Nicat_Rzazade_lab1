// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent
const Node = require('./node');
function validate(node, min = null, max = null) {
    if (node === null) return true;

    
    if ((min !== null && node.data <= min) || (max !== null && node.data >= max)) {
        return false;
    }

    
    return (
        validate(node.left, min, node.data) && 
        validate(node.right, node.data, max)   
    );
}
const n = new Node(10);
    n.insert(5);
    n.insert(15);
    n.insert(0);
    n.insert(20);
    console.log(validate(n))
module.exports = validate;
