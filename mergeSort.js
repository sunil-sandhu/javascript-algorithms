// returns a sorted array
function mergeSort(array) {
    if(array.length < 2) return array;
    let middleIndex = Math.floor(array.length / 2);
    let firstHalf = array.slice(0, middleIndex);
    let secondHalf = array.slice(middleIndex) // omitting the second param means it'll just slice until the end
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}


function merge(array1, array2) {
    let result = [];
    while(array1.length && array2.length) { //while neither array is empty
        let minElement;
        if(array1[0] < array2[0]) {
            minElement = array1.shift(); // pulls the first element out and sets minElement to first element
        } else {
            minElement = array2.shift();
        }
        result.push(minElement);
    }
    if(array1.length) {
        result = result.concat(array1);
    } else {
        result = result.concat(array2);
    }
    return result;
}


console.log(mergeSort([6000, 43, 39, 28, 5, 9, 28, 394, 54, 83, 399]))