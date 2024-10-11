// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let num=n.toString();
    if (num>=0){
        let new_num='';
        for (let j=num.length-1;j>=0;j--){
            new_num=new_num+num[j];
        }
        return Number(new_num);
    }else{
        let neg='';
        for (let j=num.length-1;j>0;j--){
            neg=neg+num[j];
        }
        return '-'+Number(neg);

    }
    
}
console.log(reverseInt(345));
module.exports = reverseInt;
