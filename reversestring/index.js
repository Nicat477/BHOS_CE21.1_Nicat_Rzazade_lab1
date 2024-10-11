// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let x=''
    for (let j=str.length-1;j>=0;j--){
        x=x+str[j];
    }
    return x;
}
console.log(reverse('  abcd'));
module.exports = reverse;
