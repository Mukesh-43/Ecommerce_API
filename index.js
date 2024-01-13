const express = require('express');
const port = 4000;
const app = express();
const db = require('./config/mongoose'); 
const bodyParser = require('body-parser');
const productRouter = require('./routes/product');
const categoriesRouter = require('./routes/categories');

//Environment
require('dotenv/config');
const api = process.env.API;

//middleware
app.use(bodyParser.json());

//Routes
app.use(`${api}+/products`, productRouter);
app.use(`${api}+/categories`, categoriesRouter);

app.listen(port,()=>{
    console.log("Server is running on the port",port);
})