function sieveOfEratosthenes(num) {
    let primes = [];
    // set values as true by default
    for(let i = 0; i<=num; i++) {
        primes[i] = true;
    }

    // set first two vals as false because 0 and 1 are not primes
    primes[0] = false;
    primes[1] = false;

    // optimisation by using square root outer loop
    for(let i = 2; i<=Math.sqrt(num); i++) {
        for(let j = 2; j*i <= num; j++) {
            primes[i*j] = false;
        }
    }

    let result = [];
    for(let i = 0; i<primes.length; i++) {
        if(primes[i]) {
            result.push(i)
        }
    }

    return result;
}



console.log(sieveOfEratosthenes(30))