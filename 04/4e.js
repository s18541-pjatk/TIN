function FindLongest(word)
{
    var indices = [];
    indices.push(0)
    for(var i=0; i<word.length;i++) {
        if (word[i] === " ") indices.push(i);
    }
    indices.push(word.length)
    toreturn="";
    maxnumber=0;
    maxplace=0;
    for(var i=0; i<indices.length; i++)
    {
        if(indices[i+1]-indices[i]>maxnumber)
        {
            maxnumber=indices[i+1]-indices[i]
            maxplace=i
        }
    }
    toreturn=word.slice(indices[maxplace],indices[maxplace+1])
    return toreturn
}
 
console.log(FindLongest("aaaaaaaaaa bbbbbbbbbbbbbb sdasda"))