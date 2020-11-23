function ReturnCoins(ammount, array)
{
    var returnarr=[]

    while (1)
    {
        if(ammount===0)
        {
            break
        }
        if(ammount===array[array.length-1])
        {
            returnarr.push(array[array.length-1])
            break
        }

        for(var i=0;  i<=array.length; i++)
        {
            if(array[i]<ammount)
            {
                returnarr.push(array[i])
                ammount=ammount-array[i]
                break
            }

        }
    }
    return returnarr
}

console.log(ReturnCoins(49, [25, 10, 5, 2, 1]))