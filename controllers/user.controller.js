let users = require("../models/users.model")
const { v4: uuidv4 } = require('uuid');

// get all users 
const getAllUsers = (req, res) => {
    res.status(200).json({
        users: users
    })
}

// get one user 
const getOneUser = (req, res) => {
    res.status(200).json({
        message: "get one user"
    })
}

// create user
const createUser = (req, res) => {
    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email,
    }
    users.push(newUser)
    // console.log(newUser)
    res.status(201).json({
        message: "created user done",
        users: users
    })
}

// update user
const updateUser = (req, res) => {
    const newId = req.params.id;
    const {username,email} = req.body;
    users.filter((user)=> {
        if(user.id == newId){
            user.username = username;
            user.email = email
        }
    })
    res.status(200).json({
        users : users
    })
}

// delete user 
const deleteUser = (req, res) => {
    const newId = req.params.id;
    users = users.filter((user)=> user.id !== newId );
    
    res.status(200).json({
        users: users
    })
}


module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    deleteUser,
    updateUser

}