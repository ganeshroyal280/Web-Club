const express = require('express');
const app = express();
var cse = "Madanapalle";
app.get('/' , (req,res)=>{
    res.send(cse);
})
app.listen(4000 , ()=>{
    console.log("server running");
});