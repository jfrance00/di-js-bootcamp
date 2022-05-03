// Exercise 1

const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);  // ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange' ]

const country = "USA";
console.log([...country]); //['u', 's', 'a']

let newArray = [...[,,]];
console.log(newArray); // [[,,]] or error?  --> correct: both undefined

// Exercise 2

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

users.map(employee => console.log(`Hello ${employee.firstName}`));

let fullStackStudents = users.filter(employee => employee.role === "Full Stack Resident");
console.log(fullStackStudents.map(student => student.lastName));


// Exercise 3

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

console.log(epic.reduce((string, word)=> string + " " + word));


// Exercise 4

let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

let passingStudents = students.filter(student => student.isPassed == true);
console.log(passingStudents);

let studentMessage =students
    .filter(student => student.isPassed == true)
    .forEach(student => console.log(`good job ${student.name} you padded the course in ${student.course}`));