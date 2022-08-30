const express = require('express');

const path = require('path');

const router = express.Router();

router.get('/post-book',(req,res)=>{
    res.sendFile(path.join(__dirname,"../",'views','admin.html'))
})
router.post('/post-book',(req,res)=>{
    console.log(req.body.item);
    res.redirect('/')
})

module.exports = router;