const express = require('express');
const router = express.Router();
const path = require('path');

//defincion de las rutas y menejadores

//ruta 1
router.get("/",(req,res)=>{
     res.sendFile(path.join(__dirname +"/../index.html"));
});


// //ruta 2
// router.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname +"/../index2.html"));
// });


// //ruta 3
//  router.get("/",(req,res)=>{
//      res.sendFile(path.join(__dirname +"/../index3.html"));
// });


// //ruta 4
// router.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname +"/../index4.html"));
// });

module.exports=router;


