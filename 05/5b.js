function Student(firstname, lastname, id, grades)
{
    this.firstname = firstname;
    this.lastname = lastname;
    this.id = id;
    this.grades = grades;
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