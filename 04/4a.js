const FactorialR = function (number) 
{
    if (number === 0) 
    {
        return 1;
    } 
    else 
    {
        return number * FactorialR(number - 1);
    }
}

function FactorialI(number)
{
    var base = 1;
    for (var i = 1; i <= number; i++)
    {
      base = base * i;
    }
    return base;
}

console.log("Recursion " + FactorialR(10))
console.log("Iteration " + FactorialI(10))