// Part 1 ------------------------------------

const student = {
    name: 'Rory',
    age: 24,
    enrolled: true,
    courses: ['Algorithms', 'Web Design', 'Tech Read and Writing'],

    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
};

console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);

console.log(student.displayInfo());
