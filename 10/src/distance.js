exports.convert = function()
{

    const distance = document.getElementById("distance").value;

    if (document.getElementById("operation").value === "km")
    {
        document.getElementById("result").value = distance*0.621371192;
    }
    else if (document.getElementById("operation").value === "mk")
    {
        document.getElementById("result").value = distance*1.609344;
    }
}