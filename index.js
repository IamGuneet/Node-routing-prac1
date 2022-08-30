const express = require('express');

const bodyParser = require('body-parser')

const path = require('path');

const app = express();
const homeRoute = require('./routes/admin');
const bookRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));

app.use(homeRoute);
app.use(bookRoute);

app.use((req,res)=>{
    res.sendFile(path.join(__dirname,"./",'views','error.html'))

//    res.sendFile(path.join(__dirname,"../","views",'erroe.html'))
    // res.status(404).send('<h1>Page not Found</h1>')
})

app.listen(3000,()=>{
    console.log("server running on port 3000");
}) 