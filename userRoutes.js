const express = require("express");
const router = express.Router();
const authorizeRoles = require("../middlewares/roleMiddleware");
const verifytoken = require("../middlewares/authmiddleware");

// only admin can access
router.get("/admin", verifytoken ,authorizeRoles("admin"),(req,res)=>{
    res.json({message:"WELCOME MY DEAR ADMIN"});
});


//both admin and moderator can access
router.get("/moderator",verifytoken,authorizeRoles("admin","moderator"),(req,res)=>{
    res.json({message:"WELCOME MODERATOR"});
});



// all can access
router.get("/user",verifytoken,authorizeRoles("admin","moderator","user"),(req,res)=>{
    res.json({message:"WELCOME USER"});
});

module.exports = router;