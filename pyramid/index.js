// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let x=1;
    for (let i=1;i<=n;i++){
        const step = ' '.repeat(n-i)+'#'.repeat(x) + ' '.repeat(n- i);
        console.log(step);
        x=x+2;
    }
}
pyramid(4)
module.exports = pyramid;
