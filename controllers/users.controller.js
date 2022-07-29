const { v4: uuidv4 } = require("uuid");
// users 
let users = require("../models/users.model");

// get users 
const getAllUsers = (req, res) => {
    res.status(200).json({
        users
    })
};

// create users 
const createUsers = (req, res) => {
    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email,

    };
    users.push(newUser);
    res.status(200).json(users);
};

// update users 
const updateUsers = (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;
    users.filter((user) => user.id == userId).map((selectedUser) => {
        selectedUser.username = username;
        selectedUser.email = email;
    });

    res.status(200).json({
        users
    });
};


// delete users 
const deleteUsers = (req, res) => {
    const userId = req.params.id;
    users = users.filter((user) => user.id != userId);

    res.status(202).json({
        users
    })
};


module.exports = { getAllUsers, createUsers, updateUsers, deleteUsers };