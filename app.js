//require libraries

const express = require('express');

//app setup 
const app = express();

//middleware 

//routes 
app.get('/', (req, res) => {
    res.send("Hello sqiurell");
})

//start server 

app.listen(3000,() => {
    console.log('Gif search listening at port 3000')
})