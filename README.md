# REST API

`steps:`
- npm init -y
- npm i express nodemon cors dotenv body-parser uuid



---

`index.js`
```js
const app = require('./app');
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`server is running http://localhost:${PORT}`);
})
```

---

`app.js`
```js
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
```

---

`user.route.js`
```js
const router = require("express").Router();
// const router = express.Router();

const { getAllUsers, createUser, updateUser, deleteUser } = require("../controllers/user.controller");



router.get('/', getAllUsers);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);



module.exports = router;
```

---

`user.controller.js`
```js
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
```

---

`users.model.js`
```js
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
```