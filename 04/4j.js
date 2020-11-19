function search(arr, num)
{
    min  = 0;
    max   = arr.length - 1;
    mid = Math.floor((max + min)/2);

    while(arr[mid] !== num && min < max)
    {
        if (num < arr[mid])
        {
            max = mid - 1;
        } 
        else if (num > arr[mid])
        {
            min = mid + 1;
        }
        mid = Math.floor((max + min)/2);
    }

 return (arr[mid] !== num) ? -1 : mid;
}

var arr = [1, 2, 3, 4, 5, 7, 8, 9];

console.log(search(arr, 1)); 

console.log(search(arr, 5));

console.log(search(arr, 7));