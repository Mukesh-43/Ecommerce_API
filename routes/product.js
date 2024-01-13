const express = require('express');
const router = express.Router();
const Product = require('../models/productSchema');
const Category = require('../models/categorySchema');
const mongoose = require('mongoose');

// Search product by one or multiple id's
router.get(`/`, async (req,res)=>{

    let filter = {};
    if(req.query.categories){
        filter = {categories: req.query.categories.split(',')};
    }
    const productsList = await Product.find(filter).populate('category');

    if(!productsList){
        res.status(500).json({success: false});
    }
    res.send(productsList);
})


// Search product By NAME
router.get(`/:name`, async (req,res)=>{

    const product = await Product.findOne(req.params);
    console.log(req.params.name)

    if(!product){
        res.status(500).json({success: false});
    }
    res.send(product);
})

// Search product by ID
router.get(`/:id`, async (req,res)=>{
    const product = await Product.findById().populate('category');

    if(!product){
        res.status(500).json({success: false});
    }
    res.send(product);
})

// Creation of product
router.post(`/`, async (req,res)=>{
    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send("Invalid Category");

    const product = new Product({
        name : req.body.name,
        description : req.body.description,
        SKU : req.body.SKU,
        brand : req.body.brand,
        price : req.body.price,
        category : req.body.category,
        countInStocks : req.body.countInStocks,
        rating : req.body.rating,
        numReviews : req.body.numReviews
    })

     product.save();

    if(!product){
        return res.status(500).send('The product cannot be created');
    }

    return res.send(product);
})

// Updation of product
router.put('/:id', async(req,res)=>{

    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(400).send('Invalid product ID');
    }

    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send("Invalid Category");

    const product = await Product.findByIdAndUpdate({_id : req.params.id},{
        name : req.body.name,
        description : req.body.description,
        SKU : req.body.SKU,
        brand : req.body.brand,
        price : req.body.price,
        category : req.body.category,
        countInStocks : req.body.countInStocks,
        rating : req.body.rating,
        numReviews : req.body.numReviews
    },{new: true})

    if(!product){
        return res.status(400).send('the product cannot be created');
    }
    res.send(product);
})

// Deletion of product
router.delete('/:id', (req,res)=>{
    Product.findByIdAndDelete({_id : req.params.id}).then(product => {
        if(product){
            return res.status(200).json({success: true, message: 'Product deleted successfully'})
        }else{
            return res.status(404).json({success: false, message: 'Product not found!'})
        }
    }).catch(err=>{
        return res.status(400).json({success: false, error: err})
    })
})

// Getting the count of total documents
router.get(`/get/count`, async (req,res)=>{
    const productCount = await Product.countDocuments();

    if(!productCount){
        res.status(500).json({success: false});
    }
    res.send({
        productCount : productCount
    });
})

module.exports = router;