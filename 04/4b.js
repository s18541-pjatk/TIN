function Fib(number)
{
    if(number===0) return 0;
    if(number===1) return 1;
    return Fib(number - 1) + Fib(number - 2);
}

console.log(Fib(10))