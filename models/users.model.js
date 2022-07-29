const { v4: uuidv4 } = require("uuid");

const users = [
    {
        id: uuidv4(),
        username: "Faisal Ahmed",
        email: "web.faisal.bd@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Tasnim",
        email: "tas.@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Anisul Islam",
        email: "anis@gmail.com"
    }
];

module.exports = users;