// userController.js

// Пример данных пользователей (заглушка)
let users = [
  { id: 1, name: 'John', email: 'john@example.com' },
  { id: 2, name: 'Alice', email: 'alice@example.com' },
  { id: 3, name: 'Bob', email: 'bob@example.com' }
];

// Контроллер для получения всех пользователей
const getAllUsers = (req, res) => {
  res.json(users);
};

// Контроллер для создания нового пользователя
const createUser = (req, res) => {
  const { name, email } = req.body;
  const id = users.length + 1;
  const newUser = { id, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Контроллер для получения пользователя по ID
const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// Контроллер для обновления пользователя по ID
const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  const user = users.find(user => user.id === userId);
  if (user) {
    user.name = name;
    user.email = email;
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// Контроллер для удаления пользователя по ID
const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);
  res.status(204).end();
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
};
