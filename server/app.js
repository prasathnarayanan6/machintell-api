const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Assuming you have body-parser middleware
app.use(bodyParser.json());
const viewproducts = require('./routes/viewproducts');
const addproducts = require('./routes/addproducts');
app.use('/api/v1/viewproducts', viewproducts);
app.use('/api/v1/addproducts', addproducts);
app.listen('3001', (req, res)=>{
    console.log('working');
})