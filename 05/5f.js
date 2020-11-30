class Person
{
	constructor(firstname, lastname)
  {
  this.firstname = firstname;
  this.lastname = lastname;
  }
  
  get fullName()
  {
  return this.firstname + " " + this.lastname;
  }
  
  set fullName(fullName)
  {
  	this.firstname = fullName.split(' ')[0];
    this.lastname =fullName.split(' ')[1];
  }
}


class Student extends Person
{
	constructor (firstname, lastname, id, grades)
  {
		super(firstname, lastname);
		this.id = id;
		this.grades = grades;
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

var s = new Student("Pablo", "XYZ", 12345, [1,2,3,4]);

console.log(s);
console.log(s.average);