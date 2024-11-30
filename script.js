// Part 1 ------------------------------------

const student = {
    name: 'Rory',
    age: 24,
    enrolled: true,
    courses: ['Algorithms', 'Web Design', 'Tech Read and Writing'],

    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Courses: ${this.courses}`;
    }
};

console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);

console.log(student.displayInfo());

// Part 2 ------------------------------------

const studentJSON = JSON.stringify(student);
const newStudentObject = JSON.parse(studentJSON);

console.log('JSON String:', studentJSON);
console.log('Parsed Object:', newStudentObject);
console.log('Objects are identical:', JSON.stringify(student) === JSON.stringify(newStudentObject));
