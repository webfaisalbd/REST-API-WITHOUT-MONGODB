

const getAllUsers = (req, res)=> {
    res.status(200).json({message: "All Users"})
}


module.exports = {
    getAllUsers,
    
}