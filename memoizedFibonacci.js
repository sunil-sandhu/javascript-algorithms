/**
 * 
 * @param {*} index index of number in fibonacci sequence
 * @param {*} cache an array used as memory
 */

function fibMemo(index, cache) {
    cache = cache || [0,1,1];
    if(cache[index]) return cache[index];
    else {
        if(index < 3) return 1;
        else {
            return cache[index] = fibMemo(index -1, cache) + fibMemo(index - 2, cache)
        }
    }
}
// This has O(n) - linear whereas our previous unmemoized fibonacci was exponential

console.time('fib')
fibMemo(300);
console.timeEnd('fib')