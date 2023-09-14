const {v4: uuidv4} = require('uuid');

const users = [
    {
        id: uuidv4(),
        username: "Shajib",
        email: "shajib@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Sadhin",
        email: "sadhin@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Walker",
        email: "walker@gmail.com"
    },
]

module.exports = users;