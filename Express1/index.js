const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
const port = 4500;
app.set('view engine','ejs');
app.set('views', __dirname +'/views');
const products = [{name:'apple',price:200},{name:'orange',price:300},{name:'mango',price:250}];
router.get('/ejs',(req,res) => {
    res.render('index', {title:'Vinsha',product:products});
});
router.get('/home',(req,res) => {
    res.sendFile(path.join(__dirname+'/template/home.html'));
});
router.get('/about',(req,res) => {
    res.sendFile(path.join(__dirname+'/template/about.html'));
});
router.get('/product',(req,res) => {
    res.sendFile(path.join(__dirname+'/template/product.html'));
});
router.get('/contact',(req,res) => {
    res.sendFile(path.join(__dirname+'/template/contact.html'));
});
router.get('/service',(req,res) => {
    res.sendFile(path.join(__dirname+'/template/service.html'));
});

app.use('/',router);
app.listen(port,() => console.log('server is running'));