function prime(number)
{
    for(var i = 2; i < number; i++)
    {
        if(number%i === 0)
        {
            return false;
        }
    }
    return true;
}

console.log(prime(3));

console.log(prime(4));