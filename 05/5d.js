  
function Student(firstname, lastname, id, grades)
{
    this.firstname = firstname;
    this.lastname = lastname;
    this.id = id;
    this.grades = grades;

  Object.defineProperties(this, {
    "average":
    {
      "get": function() {
        sum = 0;
        for (x in this.grades)
        {
            sum=sum+grades[x];
        }
        return sum/grades.length;
      }
    },
    "fullName":
    {
     "get": function() {
     return this.firstname + " " + this.lastname;
     },
     "set": function(fullName)
     {
     
     this.firstname = fullName.split(' ')[0];
     this.lastname = fullName.split(' ')[1];
     }
    }
  })



    this.getInfo = function()
    {
        sum = 0;
        for (x in this.grades)
        {
            sum=sum+grades[x];
        }
        console.log(this.firstname + " " + this.lastname + " " + this.id + " " + sum/grades.length);
    }
}

var s = new Student("Adam", "Kowalski", 12345, [1,2,3,4]);
s.getInfo();

s.fullName = ("Adam Test");

console.log(s.fullName);

console.log(s.average);

s.getInfo();