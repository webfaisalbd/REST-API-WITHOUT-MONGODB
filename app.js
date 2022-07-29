const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRouter = require("./routes/users.route")



const app = express();

// cors setup 
app.use(cors());
// body-parser setup 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// home route 
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

// users route 
app.use("/users", usersRouter)



// route not found 
app.use((req, res, next) => {
    res.status(404).json({
        message: "Route not found."
    })
})

// server not found 
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Something broke."
    })
})

module.exports = app;
