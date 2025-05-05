const express = require('express');
const router = express.Router();
const path = require('path');

//defincion de las rutas y menejadores

router.get("/",(req,res)=>{
    
    res.sendFile(path.join(__dirname +"/../indextwo.html"));
});


module.exports=router;