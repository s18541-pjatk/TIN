class Student 
{
  constructor(firstname, lastname, id, grades) 
  {
    this.firstname = firstname;
    this.lastname = lastname;
    this.id = id;
    this.grades = grades;
  }

  get fullName() 
  {
    return this.firstname + " " + this.lastname;
  }

  set fullName(fullName) 
  {
    this.firstname = fullName.split(' ')[0];
    this.lastname = fullName.split(' ')[1];
  }

  get average() 
  {
  		 	let sum = 0;
        for (let x in this.grades)
        {
            sum=sum+this.grades[x];
        }
        return sum/this.grades.length;
  }
}

var s = new Student("Adam", "Kowalik", 12345, [1, 2, 3, 4]);

console.log(s.average);
s.fullName = 'Pablo OK';
console.log(s.fullName);