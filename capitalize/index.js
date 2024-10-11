// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


function capitalize(str) {
    
    const words = str.split(' ');
    console.log(words)    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    
    return words.join(' ');
}
console.log(capitalize('look, it is working!'))
console.log(capitalize('i love breakfast at bill miller bbq'))
console.log(capitalize('hi there, how is it going?'))
module.exports = capitalize;
