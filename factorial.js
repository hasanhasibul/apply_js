

function factorial(num){
    var factorial = 1 ;
    for(var i = 1 ; i<=num ; i++){
        factorial = factorial*i;
        console.log(factorial);
    }
    console.log(factorial);
}
factorial(5)

function factorial(n){
    var i=1;
    var factorial = 1;

    while(i<=n){

        factorial= factorial*i;
        i++;
    }
    
    return factorial;
}
var result =  factorial(5);
console.log(result);
