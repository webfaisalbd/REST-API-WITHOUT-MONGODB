const { v4: uuidv4 } = require("uuid");

const users = [
    {
        id: uuidv4(),
        username: "Faisal",
        email: "faisal@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Farhana",
        email: "farhana@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Ahmed",
        email: "ahmed@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Shajib",
        email: "shajib@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Hasan",
        email: "hasan@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Tasmi",
        email: "tasmi@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Tasnim",
        email: "tasnim@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Sruti",
        email: "sruti@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Iqra",
        email: "iqra@gmail.com"
    }
];

module.exports = users;