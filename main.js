/*
  createStudent() should return a new student object.
  The name of the student, and which grade the student is in, must be passed to the function as arguments.
  The returned object should have a name property and a grade property.
*/
const createStudentObj = (studentName, studentGrade) => {
  const newStudentObj = {
    name: studentName,
    grade: studentGrade,
  };
  return newStudentObj;
};

/*
  addMathGrade() should add a new "math" property to the student with a value of "B".
*/
const addMathGrade = (studentObj) => {
  studentObj.math = "B";
  return;
};

/*
  addHistoryGrade() should add a new "history" property to the student with a value of "C".
*/
const addHistoryGrade = (studentObj) => {
  studentObj.history = "C";
  return;
};

/*
  addScienceGrade() should add a new "science" property to the student with a value of "A".
*/
const addScienceGrade = (studentObj) => {
  studentObj.science = "A";
  return;
};

const newStudent = createStudentObj("Will Hedges", 12);
addMathGrade(newStudent);
addHistoryGrade(newStudent);
addScienceGrade(newStudent);

console.log(newStudent);
