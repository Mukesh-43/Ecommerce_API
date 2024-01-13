const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    description : {
        type: String,
        required : true
    },
    SKU : {
        type : Number,
        default : 0
    },
    brand : {
        type: String,
        default : ''
    },
    price : {
        type : Number,
        default : 0
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category',
        required : true
    },
    countInStocks : {
        type : Number,
        required : true,
        min: 0,
        max: 255
    },
    rating : {
        type : Number,
        default : 0
    },
    numReviews : {
        type : Number,
        default : 0
    },
    dateCreated : {
        type : Date,
        default : Date.now
    },
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;