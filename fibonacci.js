/**
 * @param {number} position 
 * recursive function that returns a number 
 * from the fibonacci sequence based on the 
 * position number that has been passed as 
 * the param to the function
 */
function fibonacci(position) {
    if(position < 3) return 1;
    else return fibonacci(position-1) + fibonacci(position-2);
}
