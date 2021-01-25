exports.convert = function()
{

    const temp = parseInt(document.getElementById("temperature").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    if (from === "fc")
    {
        if (to === "tf")
        {
            document.getElementById("result").value = ((temp*9/5)+32);
        } else if (to === "tk") {
            document.getElementById("result").value = (temp+273.15);
        } else {
            document.getElementById("result").value = temp;
        }
    }

    if (from === "ff")
    {
        if (to === "tc")
        {
            document.getElementById("result").value = ((temp-32)*5/9);
        } else if (to === "tk") {
            document.getElementById("result").value = ((temp+459.67)*5/9);
        } else {
            document.getElementById("result").value = temp;
        }
    }

    if (from === "fk")
    {
        if (to === "tc")
        {
            document.getElementById("result").value = (temp-273.15);
        } else if (to === "tf") {
            document.getElementById("result").value = ((temp*9/5)-459.67);
        } else {
            document.getElementById("result").value = temp;
        }
    }
}