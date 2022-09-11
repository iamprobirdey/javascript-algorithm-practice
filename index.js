function addSumArray(array){
    let result = 0;
    for(let i = 0; i < array.length; i++){
        result += array[i];
    }
    return result;
}

var array = ['1','2','3','4','5'];

console.log(addSumArray(array));