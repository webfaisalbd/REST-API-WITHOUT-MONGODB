const express = require('express');
const {getAllUsers, createUsers, updateUsers, deleteUsers} = require('../controllers/users.controller');
const router = express.Router();


router.get("/", getAllUsers);
router.post("/", createUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

module.exports = router;