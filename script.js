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

// Part 3 ------------------------------------

const { name, courses } = student;

console.log(`Destructured Name: ${name}`);
console.log(`Destructured Courses: ${courses.join(', ')}`);

const scores = [85, 69, 78, 99];
const [score1, score2] = scores;

console.log(`First Score: ${score1}, Second Score: ${score2}`);

// Part 4 ------------------------------------

const clonedStudent = { ...student, graduationYear: 2024 };
console.log(clonedStudent);
// methods cant be logged when theyre cloned and referenced, unless its called directly:
console.log('displayInfo:', clonedStudent.displayInfo());

const newCourses = ['Art', 'Music', 'Drama'];
const allCourses = [...student.courses, ...newCourses];
console.log('All Courses:', allCourses);