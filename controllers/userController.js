const fs = require('fs');

const usersFilePath = './data/users.json';

function getAllUsers(req, res) {
  const users = readFromFile(usersFilePath);
  res.json(users);
}

function createUser(req, res) {
  const newUser = req.body;
  let users = readFromFile(usersFilePath);
  const newUserId = generateId(users);
  newUser.id = newUserId;
  users.push(newUser);
  saveToFile(usersFilePath, users);
  res.status(201).json(newUser);
}

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
    res.status(404).send('Uživatel nebyl nalezen');
  }
}

function deleteUser(req, res) {
  const userId = parseInt(req.params.userId);
  let users = readFromFile(usersFilePath);
  const filteredUsers = users.filter(user => user.id !== userId);
  if (filteredUsers.length < users.length) {
    saveToFile(usersFilePath, filteredUsers);
    res.status(200).send('Odstraněný uživatel');
  } else {
    res.status(404).send('Uživatel nebyl nalezen');
  }
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

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
