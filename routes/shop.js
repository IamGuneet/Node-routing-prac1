const path = require('path');

const express = require('express');

const router = express.Router();

// router.post('/post-book',(req,res)=>{
//     res.redirect('/');
// })
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"../",'views','shop.html'))
})

module.exports = router;