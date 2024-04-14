const fs = require('fs');

const coursesFilePath = './data/courses.json';

// Получить все курсы
function getAllCourses(req, res) {
  const courses = readFromFile(coursesFilePath);
  res.json(courses);
}

// Создать новый курс
function createCourse(req, res) {
  const newCourse = req.body;
  let courses = readFromFile(coursesFilePath);
  const newCourseId = generateId(courses);
  newCourse.id = newCourseId;
  courses.push(newCourse);
  saveToFile(coursesFilePath, courses);
  res.status(201).json(newCourse);
}

// Вспомогательная функция для чтения данных из файла JSON
function readFromFile(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

// Вспомогательная функция для сохранения данных в файл JSON
function saveToFile(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

// Вспомогательная функция для генерации уникального идентификатора
function generateId(data) {
  return data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;
}

module.exports = { getAllCourses, createCourse };
