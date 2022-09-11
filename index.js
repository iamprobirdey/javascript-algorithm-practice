function addSumArray(array){
    // array = [1,2,13];
    let result = 0;  // 1
    for(let i = 0; i < array.length; i++){ // 1
        result += array[i]; // 3
    }
    return result; // 1

    // Some alternate way to work on this solution

    // for(const number of array){
    //     result += number;
    // }

    // return array[0] + array[1] + array[2] // O(1)

    // return array.reduce((sum, currentName) => sum + currentName, 0); 

}

// T = 1 + 1 + 1 + n
// T = 3 + 1 * n;
// T = 1 * n // co-efficient removed.
// T = n => O(n) => Linear Time Complexity


var array = ['1','2','3','4','5'];

console.log(addSumArray(array));