// 0,1,2,3,5,8


function fibo(num){

    var fibo =[0,1];
// /fibo[i]=fibo[i-1]+fibo[i-2]
    for(var i = 2;i<=10;i++){
        fibo[i]=fibo[i-1]+fibo[i-2]
        console.log(fibo[i-2],fibo[i-1],fibo[i])
    }
    return fibo;
}

var result = fibo(10);
console.log(result);