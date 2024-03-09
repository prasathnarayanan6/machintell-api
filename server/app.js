const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Assuming you have body-parser middleware
const viewproducts = require('./routes/viewproducts');
const addproducts = require('./routes/addproducts');
const updateproducts = require('./routes/updateproducts');
app.use(bodyParser.json());
app.listen('3001', (req, res)=>{
    console.log('working');
})
app.use('/api/v1/viewproducts', viewproducts);
app.use('/api/v1/addproducts', addproducts);
app.use('./api/v1/updateproducts/:id', updateproducts);