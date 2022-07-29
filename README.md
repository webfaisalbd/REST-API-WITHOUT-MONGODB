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

