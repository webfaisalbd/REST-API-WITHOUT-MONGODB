const router = require("express").Router();
// const router = express.Router();

const { getAllUsers } = require("../controllers/user.controller");



router.get('/', getAllUsers)

module.exports = router;