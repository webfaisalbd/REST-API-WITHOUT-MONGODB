const app = require('./app');

const PORT = 4000;
app.listen(PORT, ()=> {
    console.log(`running server at http://localhost:${PORT}`);
})