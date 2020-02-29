// Example of recursion
// A function that calls itself
// A function that has a base case, and will call itself if that base case hasn't been met.
function factorial(num) {
    if(num === 1) {
        return num;
    } else {
        return num * factorial(num -1)
    }
}