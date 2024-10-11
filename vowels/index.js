// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowel_arr=['a','i','u','e','o'];
    let x=0;
    for (let i=0;i<vowel_arr.length;i++){
        for (let j=0;j<str.length;j++){
            if (vowel_arr[i]==str[j]){
                x=x+1;
            }
        }
    }
    return x;
}
console.log(vowels('abecdefghijklmnopqrstuvwxyz'));
module.exports = vowels;
