const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
const port = 4500;
// app.get('/', (req,res) => res.send(path.join(__dirname+'/template/home.html')));
router.get('/home',(req,res) => {
    res.sendFile(path.join(__dirname+'/template/home.html'));
});
router.get('/about',(req,res) => {
    res.sendFile(path.join(__dirname+'/template/about.html'));
});
router.get('/contact',(req,res) => {
    res.sendFile(path.join(__dirname+'/template/contact.html'));
});
router.get('/product',(req,res) => {
    res.sendFile(path.join(__dirname+'/template/product.html'));
});
router.get('/service',(req,res) => {
    res.sendFile(path.join(__dirname+'/template/service.html'));
});
// app.get('/home', (req,res) => res.send('This is home'));
// app.get('/aboutus', (req,res) => res.send('This is about us'));
// app.get('/products', (req,res) => res.send('This is products'));
// app.get('/contactus', (req,res) => res.send('This is contact us'));
app.use('/',router);
app.listen(port,()=> console.log('server is running'));