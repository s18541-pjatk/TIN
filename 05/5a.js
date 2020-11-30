const cat = {
    name: 'Alfonso',
    isMale: true,
    makeNoise: function () {
        return "Miau!";
    },
    whatYourName: function () {
        return "My name is: " + this.name;
    }
}

function printAll(object)
{
    for(var prop in object)
    {
        prop = object[prop];
        if (typeof(prop) !== "function")
        {
            console.log(prop + " " + typeof (prop));
        }
    }
}

console.log(cat.makeNoise());
console.log(cat.whatYourName());
printAll(cat);