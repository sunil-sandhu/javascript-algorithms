function meanMedianMode(array) {
    return console.log({
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array),
    });
}

function getMean(array) {
    let sum = 0;
    array.forEach(num => {
        sum += num;
    })

    let mean = sum / array.length;
    return mean
}

function getMedian(array) {
    array.sort((a, b) => a - b);
    let median;
    let middle = array.length / 2;
    if(array.length % 2 !== 0) {
        median = array[Math.floor(middle)];
    } else {
        let mid1 = array[(middle - 1)]
        let mid2 = array[(middle)];
        median = (mid1 + mid2) / 2;
    }
    return median;
}

function getMode(array) {
    let modeObj = {};
    
    array.forEach(num => {
        if (!modeObj[num]) modeObj[num] = 0;
        modeObj[num]++;
    });

    let maxFrequency = 0;
    let modes = [];
    for(let num in modeObj) {
        if(modeObj[num] > maxFrequency) {
            modes = [num];
            maxFrequency = modeObj[num];
        } else if (modeObj[num] === maxFrequency) modes.push(num)
    }

    if(modes.length === Object.keys(modeObj).length) modes = [];

    return modes;
}
