function anagrams(stringA, stringB) {
    
    const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~() ]/g;
    let arr1=[];
    let arr2=[];
    for (let i=0;i<stringA.length;i++){
        if (!punctuationRegex.test(stringA[i]) && stringA[i]!=''){
            arr1.push(stringA[i].toLowerCase())
        }
    }
    for (let i=0;i<stringB.length;i++){
        if (!punctuationRegex.test(stringB[i])){
            arr2.push(stringB[i].toLowerCase())
        }
    }
    arr1.sort();
    arr2.sort();
    const arraysAreEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) return false;
        
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    };
    return arraysAreEqual(arr1, arr2);

}
console.log(anagrams('rail safety', 'fairy tales'));
module.exports = anagrams;