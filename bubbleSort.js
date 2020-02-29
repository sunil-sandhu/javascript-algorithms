// returns a sorted array
function bubbleSort(array) {
    // outer loop: do whatever is inside array.length - 1 times
    for(let i = array.length; i > 0; i--) {
        // inner loop: loop through and on each loop, stop one element earlier
        for(let j = 0; j < i; j++){
            let num = array[j];
            if(array[j] > array[j+1]) {
                array[j] = array[j+1]
                array[j+1] = num;
            }
        }
    }
    return array;
}

console.log(bubbleSort([5,3,8,2,1,4]))