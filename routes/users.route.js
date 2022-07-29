const express = require('express');
const {getAllUsers, createUsers, updateUsers} = require('../controllers/users.controller');
const router = express.Router();


router.get("/", getAllUsers);
router.post("/", createUsers);


module.exports = router;