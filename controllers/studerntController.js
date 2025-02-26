const path = require('path');
const {readFileSync, writeFileSync} = require('fs');
// student data
const students = JSON.parse(readFileSync(path.join(__dirname, "../db/student.json")))
// Get all students
const getAllStudent = (req, res) => { 
  res.render("student/index", {
      students,
  });
};

// Render form to create a new student
const createStudent = (req, res) => {
  res.render('student/create');
};


const studentDataStore = (req, res) => {
  const {name, email, cell, location} = req.body
  students.push({
    id : students[students.length-1].id + 1,
    name : name, 
    email : email,
    cell: cell, 
    location: location, 
    photo : "one.jpg"
  })

  writeFileSync(path.join(__dirname, "../db/student.json"), JSON.stringify(students));
  res.redirect("/student");
}

// Show details of a single student
const getSingleStudent = (req, res) => {
  res.render('student/show');
};

// Render form to edit a student
const editStudent = (req, res) => {
  res.render('student/edit');

 
};

// Module exports
module.exports = { getAllStudent, createStudent, getSingleStudent, editStudent, studentDataStore };
