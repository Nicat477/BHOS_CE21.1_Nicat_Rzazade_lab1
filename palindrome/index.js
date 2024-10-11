// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let x=''
    for (let j=str.length-1;j>=0;j--){
        x=x+str[j];
    }
    if (x==str){
        return true
    }
    else{
        return false
    }
}
console.log(palindrome("abda"))
module.exports = palindrome;
