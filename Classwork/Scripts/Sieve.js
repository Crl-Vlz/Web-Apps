function sieve (n){

    var primes = [];

    var array = Array(1000001).fill(1);

    for( var i = 2; i < n; i++){
        if (array[i] == 1){
            for (var j = i*2; j < n; j += i){
                array[j] = 0;
            }
        }
    }

    array[0] = 0;
    array[1] = 0;

    for( var i = 0; i < n; i++){
        if( array[i] == 1) primes.push(i);
    }

    return primes;

};

console.log(sieve(1000000))