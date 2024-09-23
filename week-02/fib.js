function fib(index){
    if (index == 0) { return 0; }
    else if (index == 1) {return 1;} 
    else{
        return fib(index - 1) + fib(index -2);
    }
}

console.log(fib(0)); //console.log 印出函數的返回值
console.log(fib(1));
console.log(fib(5));
console.log(fib(10));