// Part 1 ------------------------------------

const student = {
    name: 'Rory',
    age: 24,
    enrolled: true,
    courses: ['Algorithms', '', 'History'],

    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
};

console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);

console.log(student.displayInfo());
