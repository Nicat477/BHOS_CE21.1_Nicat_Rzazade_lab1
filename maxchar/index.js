function maxChar(str) {
    const newArr=[];

    for (let i = 0; i < str.length; i++) {
        const word = str[i];
        
        // Check if the word is not already in the new array
        if (!newArr.includes(word)) {
            newArr.push(word); // Add the word if it's not already present
        }
    }

    const num=[];
    for (let i=0;i<newArr.length;i++){
        let x=0;
        for (let j=0;j<str.length;j++){
            if (newArr[i]==str[j]){
                x=x+1;
            }
        }
        num.push(x);
    }
    const maxNumber = Math.max(...num);
    let res=0;
    for (let i=0;i<num.length;i++){
        if (maxNumber==num[i]){
            res=i;
            break;
        }
    }

    return newArr[res];

}
console.log(maxChar("abcccccccd"));
module.exports = maxChar;