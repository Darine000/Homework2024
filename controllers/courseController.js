const fs = require('fs');

const coursesFilePath = './data/courses.json';

function getAllCourses(req, res) {
  const courses = readFromFile(coursesFilePath);
  res.json(courses);
}

function createCourse(req, res) {
  const newCourse = req.body;
  let courses = readFromFile(coursesFilePath);
  const newCourseId = generateId(courses);
  newCourse.id = newCourseId;
  courses.push(newCourse);
  saveToFile(coursesFilePath, courses);
  res.status(201).json(newCourse);
}

function readFromFile(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

function saveToFile(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}


function generateId(data) {
  return data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;
}

module.exports = { getAllCourses, createCourse };
