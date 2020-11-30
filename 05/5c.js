const studentPrototype =
{
  courses: ["GUI", "BYT", "GRK", "TPO"]
}

function Student(firstname, lastname, id)
{
  var student = Object.create(studentPrototype);
  student.firstname = firstname;
  student.lastname = lastname;
  student.id = id;
  return student;
} 

var s1 = new Student("Adam", "Kowalski", 12345);
var s2 = new Student("Andrzej", "Kowalik", 54321);

console.log(s2);
console.log(s1);