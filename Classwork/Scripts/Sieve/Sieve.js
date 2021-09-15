function sieve (n){

    var primes = [];

    var array = Array(10000001).fill(1);

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
        if( array[i] == 1) primes.push(String.fromCharCode(10) + i);
    }

    return primes;

};

//Requieres an html tag with ID List
function printPrimesToN(n){
    var listPrimes = "";
    var primes = sieve(n);
    listPrimes = primes.toString();
    document.getElementById("List").innerText = listPrimes;
};

document.onload = printPrimesToN(1000000);