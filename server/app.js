const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Assuming you have body-parser middleware
const viewproducts = require('./routes/ProductRoutes/viewproducts');
const addproducts = require('./routes/ProductRoutes/addproducts');
const updateproducts = require('./routes/ProductRoutes/updateproducts');
const deleteproducts = require('./routes/ProductRoutes/deleteproducts');
const addproductspecs = require('./routes/productSpecsRoutes/addproductspecs')
app.use(bodyParser.json());
app.listen('3001', (req, res)=>{
    console.log('working');
})
app.use('/api/v1/viewproducts', viewproducts);
app.use('/api/v1/addproducts', addproducts);
app.use('/api/v1/updateproducts', updateproducts);
app.use('/api/v1/deleteproducts', deleteproducts);
app.use('/api/v1/addproductspecs', addproductspecs);
// app.use('/api/v1/')