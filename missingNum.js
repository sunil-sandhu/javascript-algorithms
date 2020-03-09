// This implementation only works if the lowest possible number in the array is 0.
function missingNum(nums) {
    nums = nums.sort((a, b) => a - b);
    
    if(nums.length === 1) {
        if(nums[0] === 0) return 1;
        return 0;
    };

    for(let i = 0; i < nums[nums.length -1]; i++ ) {
        if(i !== nums[i]) return i;
    } 
    
    return last + 1;
};
