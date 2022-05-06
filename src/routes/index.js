const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('index',{title: 'First wbsit'});
});

router.get('/contact',(req,res)=>{
    res.render('contact',{title: 'Contactos'});
});

module.exports = router;