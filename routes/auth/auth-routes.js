const express =require("express");
const {registerUser,loginUser}=require("../../controller/auth-controller/auth-controller")
const router =express.Router();

router.post("/register",registerUser);
router.post("/register",loginUser);

module.exports = router