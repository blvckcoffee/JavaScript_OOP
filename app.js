console.log('Hello World!\n==========\n');

// Exercise 1 Section
console.log('EXERCISE 1:\n==========\n');

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  info() {
    console.log(
      `Hello, my name is ${this.name}. I have ${this.pets} pets. I live in ${
        this.residence
      } and my hobbies are ${this.hobbies.join(' and ')}.`
    );
  }
  greeting(name = this.name) {
    console.log(`Hello ${name}!`);
  }
}

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = 'Full Stack Web Developer';
  }
  greeting(name = this.name) {
    console.log(`Hello, my name is ${name} and I am a ${this.occupation}.`);
  }
}

let newPerson = new Person('Joe', 0, 'Birmingham', [
  'running',
  'coding',
  'reading',
  'playing chess',
]);

let newCoder = new Coder('Brent', 0, 'Panama City', [
  'watching football',
  'grilling',
  'playing disc golf',
]);

newPerson.greeting();
newCoder.greeting();
newPerson.info();
newCoder.info();
newPerson.greeting('Ben');
newCoder.greeting('Tanner');
