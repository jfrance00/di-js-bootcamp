// Exercise 1

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
    // will say "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)"


// Exercise 2

const studentName = {first: 'Elie', last:'Schoppik'}

function displayStudentInfo(studentInfo) {
    const {first, last} = studentInfo;
    console.log(`Your full name is ${first} ${last}`)
}

displayStudentInfo(studentName);
    // output : 'Your full name is Elie Schoppik'`


// Exercise 3

const users = { user1: 18273, user2: 92833, user3: 90315 }

console.log(Object.entries(users));

    // multiply user ID by 2

usersArray = Object.entries(users)

usersArray.map(user => [user[0], user[1] * 2]);


// Exercise 4

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
    // will console log object


// Exercise 5

class Dog {
    constructor(name) {
      this.name = name;
    }
  };

  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };


// Exercise 6

[2] === [2] //true  -> actually was false
{} === {}   //false

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)  // 4
console.log(object3.number)  // 4
console.log(object4.number)  // 5

class Animal{
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal{
    constructor(name, type, color){
        super(name, type, color);
    }
    sound(animalSound){
        return `${this.name} ${this.type} ${this.color} ${animalSound}`;
    }
}

cow = new Mamal("Bessie", "large", "brown", "moooooo");
console.log(cow.sound("mooooooooo"));