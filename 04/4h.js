function find(array)
{
    if (array.length<5) return null;
    array.sort();
    return [array[1], array[array.length-2]];
}

var arr = [1,2,3,4,5];

console.log(find(arr));