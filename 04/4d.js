function order(text)
{
    var tmp="";

    for (var j = 33; j < 126; j++)
    {
        for (var i = 0; i < text.length; i++)
        {
            if(text.charCodeAt(i)===j)
            {
                tmp = tmp + text[i];
            }
        }
    }
    return tmp;
}

console.log(order("webmaster"))