// getting-started.js
const mongoose = require('mongoose');

    mongoose.connect('mongodb+srv://MunnaMukesh:MunnaMukesh@cluster0.uycifec.mongodb.net/Ecommerce_API?retryWrites=true&w=majority')
.then(()=>{
    console.log('Database connection ready...')
}).catch((err)=>{
    console.log(err);
})

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled