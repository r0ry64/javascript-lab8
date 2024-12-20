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

console.log(`Destructured name: ${name}`);
console.log(`Destructured courses: ${courses.join(', ')}`);

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
console.log('All courses:', allCourses);

// Part 5 ------------------------------------

student.addCourse = function (newCourse) {
    this.courses.push(newCourse);
};

student.getTotalCourses = function () {
    return this.courses.length;
};

student.addCourse('Canadian History');
console.log(student.name,'added',student.courses[student.courses.length-1],'course.');
console.log('Updated courses for',student.name,':', student.courses);
console.log('Total number of courses:', student.getTotalCourses());

// Bonus task ------------------------------------

const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log(`Average Score: ${averageScore.toFixed(2)}`);