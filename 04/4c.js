function IsPalindrome(text)
{
    for (var i = 0; i < text.length; i++)
    {
        if(text[i] !== text[text.length-1 - i])
        {
            return false;
        }
    }
    return true;
}

console.log(IsPalindrome("cat"))

console.log(IsPalindrome("evacaniseebeesinacave"))