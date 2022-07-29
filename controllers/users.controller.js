// users 
const users = require("../models/users.model");

const getAllUsers = (req,res)=> {
    res.status(200).json({
        users
    })
};

const createUsers = (req,res)=> {
    res.status(200).json({
        message: "I am create User."
    })
};


module.exports = {getAllUsers, createUsers};