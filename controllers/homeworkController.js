const fs = require('fs');

const homeworkFilePath = './data/homework.json';

function getHomeworkByCourseId(req, res) {
  const courseId = parseInt(req.params.courseId);
  const homework = readFromFile(homeworkFilePath);
  const assignments = homework.filter(assignment => assignment.courseId === courseId);
  res.json(assignments);
}

function createHomework(req, res) {
  const newAssignment = req.body;
  let homework = readFromFile(homeworkFilePath);
  const newAssignmentId = generateId(homework);
  newAssignment.id = newAssignmentId;
  homework.push(newAssignment);
  saveToFile(homeworkFilePath, homework);
  res.status(201).json(newAssignment);
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

module.exports = { getHomeworkByCourseId, createHomework };
