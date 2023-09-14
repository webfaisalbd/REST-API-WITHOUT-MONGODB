const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const userRouter = require('./routes/user.route');
const { createUser } = require('./controllers/user.controller');




// api/users -> GET
// api/users/:id -> GET
// api/users/ -> POST
// api/users/:id -> PUT
// api/users/:id -> DELETE

app.use('/api/users', userRouter);


// home route
app.get('/', (req,res)=> {
res.sendFile(__dirname+'/views/index.html');
})

// route not found
app.use((req,res,next)=> {
    res.status(404).json({message: "Route not found."});
})

// server not found
app.use((err, req, res, next)=> {
    res.status(500).json({message: "Something is broken."})
})

module.exports = app;