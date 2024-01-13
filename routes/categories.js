const express = require('express');
const router = express.Router();
const Category = require('../models/categorySchema');


// Finds all categories
router.get(`/`, async (req,res)=>{
    const categoryList = await Category.find();

    if(!categoryList){
        res.status(500).json({success: false});
    }
    res.status(200).send(categoryList);
})

// Find categories using id
router.get(`/:id`, async (req,res)=>{
    const category = await Category.findById(req.params.id);

    if(!category){
        return res.status(404).send('Category with this ID not found!')
    }
    res.status(200).send(category);
})

// Creation of category
router.post('/', async(req,res)=>{
    let category = new Category({
        name : req.body.name,
        icon : req.body.icon,
        color : req.body.color
    })
    category = await category.save();

    if(!category){
        return res.status(400).send('Category cannot be added');
    }

    res.send(category);
})

// Updation of category
router.put('/:id', async(req,res)=>{
    const category = await Category.findByIdAndUpdate({_id : req.params.id},{
        name : req.body.name,
        icon : req.body.icon,
        color : req.body.color
    },{new: true})

    if(!category){
        return res.status(400).send('the category cannot be created');
    }
    res.send(category);
})

// Deletion of category
router.delete('/:id', (req,res)=>{
    Category.findByIdAndDelete({_id : req.params.id}).then(category => {
        if(category){
            return res.status(200).json({success: true, message: 'Category deleted successfully'})
        }else{
            return res.status(404).json({success: false, message: 'Category not found!'})
        }
    }).catch(err=>{
        return res.status(400).json({success: false, error: err})
    })
})

module.exports = router;