const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Assuming you have body-parser middleware
const addproducts = require('./routes/ProductRoutes/addproducts');
const viewproducts = require('./routes/ProductRoutes/viewproducts');
const updateproducts = require('./routes/ProductRoutes/updateproducts');
const deleteproducts = require('./routes/ProductRoutes/deleteproducts');
const addproductspecs = require('./routes/productSpecsRoutes/addproductspecs');
const viewproductspecs = require('./routes/productSpecsRoutes/viewproductspecs');
const updateproductspecs = require('./routes/productSpecsRoutes/updateproductspecs');
const deleteproductspecs = require('./routes/productSpecsRoutes/deleteproductspecs');
const addmainassembly = require('./routes/MainAssemblyRoutes/addmainassembly');
const viewmainassembly = require('./routes/MainAssemblyRoutes/viewmainassembly');
const updatemainassembly = require('./routes/MainAssemblyRoutes/updatemainassembly');
const deletemainassembly = require('./routes/MainAssemblyRoutes/deletemainassembly');
const addsubassembly = require('./routes/SubAssemblyRoutes/addsubassembly');
const viewsubassembly = require('./routes/SubAssemblyRoutes/viewsubassembly');
const updatesubassembly = require('./routes/SubAssemblyRoutes/updatesubassembly');
const deletesubassembly = require('./routes/SubAssemblyRoutes/deletesubassembly');
const addsubassemblycomponents = require('./routes/SubAssemblyRoutes/addsubassemblycomponents');
const viewsubassemblycomponents = require('./routes/SubAssemblyRoutes/viewsubassemblycomponents');
const updatesubassemblycomponents = require('./routes/SubAssemblyRoutes/updatesubassemblycomponents');
const deletesubassemblycomponents = require('./routes/SubAssemblyRoutes/deletesubassemblycomponents');

app.use(bodyParser.json());
app.listen('3001', (req, res)=>{
    console.log('working');
})
app.use('/api/v1/addproducts', addproducts);
app.use('/api/v1/viewproducts', viewproducts);
app.use('/api/v1/updateproducts', updateproducts);
app.use('/api/v1/deleteproducts', deleteproducts);
app.use('/api/v1/addproductspecs', addproductspecs);
app.use('/api/v1/viewproductspecs', viewproductspecs);
app.use('/api/v1/updateproductspecs', updateproductspecs);
app.use('/api/v1/deleteproductspecs', deleteproductspecs);
app.use('/api/v1/addmainassembly', addmainassembly);
app.use('/api/v1/viewmainassembly', viewmainassembly);
app.use('/api/v1/updatemainassembly', updatemainassembly);
app.use('/api/v1/deletemainassembly', deletemainassembly);
app.use('/api/v1/addsubassembly', addsubassembly);
app.use('/api/v1/viewsubassembly', viewsubassembly);
app.use('/api/v1/updatesubassembly', updatesubassembly);
app.use('/api/v1/deletesubassembly', deletesubassembly);
app.use('/api/v1/addsubassemblycomponents', addsubassemblycomponents);
app.use('/api/v1/viewsubassemblycomponents', viewsubassemblycomponents);
app.use('/api/v1/updatesubassemblycomponents', updatesubassemblycomponents);
app.use('/api/v1/deletesubassemblycomponents', deletesubassemblycomponents);

