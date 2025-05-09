const express=require('express');
const path=require('path');

const app=express();

//puerto
const port=5076;


app.get("/",(req,res)=>{
    
    //res.send("HolaMundo")
    
    //res.sendFile("C:/Users/salva/Desktop/WEb2/05052025/index.html");
    
    res.sendFile(path.join(__dirname+"/index.html"));
});
//salida del servidor
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});