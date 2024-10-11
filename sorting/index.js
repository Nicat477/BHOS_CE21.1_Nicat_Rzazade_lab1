// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    // Print the sorted array
    console.log(arr);
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[lowest] > arr[j]) {
            lowest = j;
          }
        }
        if (i !== lowest) {
          // swap the elements
          [arr[i],arr[lowest]] = [arr[lowest], arr[i]];
        }
      }
    
      return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: an array of zero or one element is sorted
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // Sort the left half
    const right = mergeSort(arr.slice(mid)); // Sort the right half

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    // Merge the two sorted arrays
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Concatenate remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}
const left = [1, 10];
const right = [2, 8, 12];
console.log(merge(left,right))
module.exports = { bubbleSort, selectionSort, mergeSort, merge };
