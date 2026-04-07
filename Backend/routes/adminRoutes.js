const express = require("express");
const router = express.Router();

const {verifyToken , isAdmin} =  require("../middleware/authMiddleware");
const {getUsers , getUserById , deleteUser } =  require("../controllers/userController");
const {addServices , UpdateService ,deleteService} = require("../controllers/serviceController");


// Only Admin can Access
router.get('/dashboard' , verifyToken , isAdmin , (req , res )=>{
    res.json({message:"Welcome to Admin Dashboard"})
})
router.get('/users' , verifyToken , isAdmin , getUsers);
router.get('/user/:id' , verifyToken , isAdmin , getUserById);
router.delete('/user/:id' , verifyToken , isAdmin , deleteUser);

// Services Routes
router.post('/add' , verifyToken , isAdmin , addServices);
router.put('/update/:id' , verifyToken , isAdmin , UpdateService);
router.delete('/delete/:id' , verifyToken , isAdmin , deleteService);

module.exports = router;