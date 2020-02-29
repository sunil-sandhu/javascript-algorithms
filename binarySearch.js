// Given input must be sorted for Binary Search to work
function binarySearch(numArray, key) {
    let middleIndex = Math.floor(numArray.length / 2);
    let middleElement = numArray[middleIndex];

    // base case
    if(key === middleElement) {
        return true
    }

    else if(middleElement < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIndex, numArray.length), key)
    }

    else if(middleElement > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIndex), key)
    }

    else {
        return false;
    }
}

binarySearch([5, 7, 12, 15, 17, 19, 23, 25, 29, 41, 53, 54, 55, 79, 80, 80], 25)