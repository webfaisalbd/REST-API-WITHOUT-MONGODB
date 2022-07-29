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




module.exports = { getAllUsers, createUsers };