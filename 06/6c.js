function validate()
{
    return (validateID() && validateEmail());
}

function validateID() {
    const id = document.getElementById("id").value;

    if (Number(id) < 0 || Number(id) > 1000 || isNaN(id))
    {
        document.getElementById('id').style.backgroundColor = "red";
        return false;
    }

    document.getElementById('id').style.backgroundColor = "green";
    return true;
}

function validateEmail() {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = document.getElementById('email').value;

    if(regex.test(String(email).toLowerCase()))
    {
        document.getElementById('email').style.backgroundColor = "green";
        return true;
    }

    document.getElementById('email').style.backgroundColor = "red";
    return false;
}