const express = require('express');
const app = express();
const addProduct = require('./routes/addproduct');
const editProduct = require('./routes/editproduct')
app.use('/addproduct', addProduct);
app.use('/editproduct', editProduct);
app.listen('3001', (req, res)=>{
    console.log('working');
})