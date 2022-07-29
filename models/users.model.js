const { v4: uuidv4 } = require("uuid");

const users = [
    {
        id: uuidv4(),
        username: "faisal",
        email: "faisal@gmail.com"
    },
    {
        id: uuidv4(),
        username: "tamim",
        email: "tamim.@gmail.com"
    }
];

module.exports = users;