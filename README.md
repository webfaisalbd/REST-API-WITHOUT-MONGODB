# REST-API-WITHOUT-MONGODB

- in this project, I follow MVC architecture

- routes demo :
    - /users -> GET -> {id, username, email}
    - /users -> POST -> {username, email}
    - /users/:id -> PUT -> update the user
    - /users/:id -> DELETE -> delete the user


- need to install:
`npm install express nodemon cors body-parser dotenv uuid`


- cors er jonno 1 line
`app.use(cors());`

- body-parser er jonno 2 line
`app.use(bodyParser.urlencoded({extended: true}))`
`app.use(bodyParser.json())`


- user.controller.js logical portion of code
```javascript

// get users 
const getAllUsers = (req, res) => {
    res.status(200).json({
        users
    })
};


// create users 
const createUsers = (req, res) => {
    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email,

    };
    users.push(newUser);
    res.status(200).json(users);
};


// update users 
const updateUsers = (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;
    users.filter((user) => user.id == userId).map((selectedUser) => {
        selectedUser.username = username;
        selectedUser.email = email;
    });

    res.status(200).json({
        users
    });
};


// delete users 
const deleteUsers = (req, res) => {
    const userId = req.params.id;
    users = users.filter((user) => user.id != userId);

    res.status(202).json({
        users
    })
};

```

---


## .env

- index.js
```javascript
require("dotenv").config();
const PORT = process.env.PORT || 4000;
```

- .env file
```javascript
PORT=4000
```


## Heroku 

- create a `Procfile` and inside the Procfile,
```javascript
web: node index.js
```