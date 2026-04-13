const express = require("express");
const router = express.Router();

const {verifyToken , isAdmin} =  require("../middleware/authMiddleware");
const {getUsers , getUserById , deleteUser, updateUserStatus } =  require("../controllers/userController");
const { getDashboardCounts } = require("../controllers/authController");


// Only Admin can Access
router.get('/dashboard' , verifyToken , isAdmin , (req , res )=>{
    res.json({message:"Welcome to Admin Dashboard"})
})
router.get('/users' , verifyToken , isAdmin , getUsers);
router.get('/user/:id' , verifyToken , isAdmin , getUserById);
router.delete('/user/:id' , verifyToken , isAdmin , deleteUser);
router.put("/user/status/:id",verifyToken , isAdmin , updateUserStatus);
router.get('/dashboard-counts' , verifyToken , isAdmin , getDashboardCounts);

module.exports = router;