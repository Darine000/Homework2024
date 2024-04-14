const fs = require('fs');

const usersFilePath = './data/users.json';

// Получить всех пользователей
function getAllUsers(req, res) {
  const users = readFromFile(usersFilePath);
  res.json(users);
}

// Создать нового пользователя
function createUser(req, res) {
  const newUser = req.body;
  let users = readFromFile(usersFilePath);
  const newUserId = generateId(users);
  newUser.id = newUserId;
  users.push(newUser);
  saveToFile(usersFilePath, users);
  res.status(201).json(newUser);
}

// Обновить данные пользователя
function updateUser(req, res) {
  const userId = parseInt(req.params.userId);
  const updatedUserData = req.body;
  let users = readFromFile(usersFilePath);
  const index = users.findIndex(user => user.id === userId);
  if (index !== -1) {
    users[index] = {...users[index], ...updatedUserData };
    saveToFile(usersFilePath, users);
    res.status(200).json(users[index]);
  } else {
    res.status(404).send('Пользователь не найден');
  }
}

// Удалить пользователя
function deleteUser(req, res) {
  const userId = parseInt(req.params.userId);
  let users = readFromFile(usersFilePath);
  const filteredUsers = users.filter(user => user.id !== userId);
  if (filteredUsers.length < users.length) {
    saveToFile(usersFilePath, filteredUsers);
    res.status(200).send('Пользователь удален');
  } else {
    res.status(404).send('Пользователь не найден');
  }
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

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
