function factorialRecursive(n){
    if(n==0){
        return 1;
    }
    else{
        return factorialRecursive(n-1)*n;
    }
}

var result = factorialRecursive(10);
console.log(result);