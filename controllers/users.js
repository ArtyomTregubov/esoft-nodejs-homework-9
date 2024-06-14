import userDb from './reposio/usersDb';
const {
    sortUsersByAge, sortUsersByDomain, sortUsersByName
  } = require('../services/users');

function getUsers(req, res){
    const users = userDb.getUsers();
    res.json(users);
}

function getUser(req, res){
    const userId = parseInt(req.params.id);
    const user = userDb.getUser(userId);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
    } else {
        res.json(user);
    }
}

function sortUsersByAge(req, res){
    const { age } = req.params;
    const users = userDb.getUsers();
    const filteredUsers = sortUsersByAge(users, age);
    res.json(filteredUsers);
}

function sortUsersByDomain(req, res){
    const domain = req.params.domain;
    const users = userDb.getUsers();
    const filteredUsers = sortUsersByDomain(users, domain);
    if (filteredUsers.length === 0) {
        res.status(404).json({ message: 'users with domain not found' });
    } else {
        res.json(filteredUsers);
    }
}
function sortUsersByName(req, res){
    const users = userDb.getUsers();
    const sortedUsers = sortUsersByName(users); 
    res.json(sortedUsers);
}

function createUser(req, res){
    const { id, name, email, age } = req.body;
    if (!id || !name || !email || !age) {
        res.status(400).json({ message: 'Please provide id, name, email, and age' });
    } else {
        const newUser = { id, name, email, age };
        userDb.createUser(newUser);
        res.status(201).json(newUser);
    }
}

function updateUser(req, res){
    const { id, name, email, age } = req.body;
    if (!id || !name || !email || !age) {
        res.status(400).json({ message: 'Please provide id, name, email, and age' });
    } else {
        const updateUserInfo = { id, name, email, age };
        userDb.updateUser(updateUserInfo);
        res.status(201).json(updateUserInfo);
    }
}

function deleteUser(req, res){
    const userId = parseInt(req.params.id);
    userDb.deleteUser(userId)
    res.status(204).json({ message: 'User deleted' });
}

module.exports = {
    getUsers,
    getUser,
    sortUsersByAge, 
    sortUsersByDomain,
    sortUsersByName,
    createUser,
    updateUser,
    deleteUser,
  };

 