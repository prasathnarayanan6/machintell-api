const express = require('express');
const app = express();
const viewproducts = require('./routes/viewproducts');
const addproducts = require('./routes/addproducts');
// const editProduct = require('./routes/editproduct')
app.use('/viewproducts', viewproducts);
app.use('/addproducts', addproducts);
// app.use('/editproduct', editProduct);
app.listen('3001', (req, res)=>{
    console.log('working');
})