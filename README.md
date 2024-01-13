# Ecommerce_API    
    
# Introduction
This is one of my E-commerce API app implementations. It is written in Node js, using Express and Mongoose as the main dependencies.
This is a backend project where I created a basic featured Ecommerce API.
If you are interested in this project take a look at my other server API implementations I have made with:

# Getting started
As with most node.js projects, do the following
1. npm init
2. npm install nodemon,express,mongoose
3. Create Models and Schemas
4. Connect the application to MongoDB
5. npm start
6. The last step is up to you, you can either open it in an IDE and debug it, or you can open the api.postman_collection.json with Postman, and then execute the queries

# Features
- CRUD operations on categories
- CRUD operations on products
- Get all categories
- Find categories using ID's
- Search product by one or multiple category ID's
- Search product by Name
- Search product by ID
- Getting Total count of all Documents

# What you will learn
- MongoDB
    - MongoDb Atlas
    - Cloud storage
    - mongoose.js
- node.js
    - express
    - middlewares

# Routes 
  ## Categories (Variants)
  - Category creation : POST: http://localhost:4000/api/v1/categories ,
    Passed to body    : {       
                                  "name" : "Mobile phones",
                                  "icon" : "mobile.icon",
                                  "color" : "Black"
                          }

   - Category updation : PUT: http://localhost:4000/api/v1/categories/:id ,
     Passed to body    :  {
                                  "name" : "Mobile phones",
                                  "icon" : "mobile.icon",
                                  "color" : "Black"
                          }

   - Category deletion : DELETE: http://localhost:4000/api/v1/categories
     
   - Find all categories : GET: http://localhost:4000/api/v1/categories
     
   - Find categories using ID's : GET: http://localhost:4000/api/v1/categories/:id

 ## Products
  - Product creation : POST: http://localhost:4000/api/v1/products ,
   Passed to Body   :
    {
        name : req.body.name,
        description : req.body.description,
        SKU : req.body.SKU,
        brand : req.body.brand,
        price : req.body.price,
        category : req.body.category,
        countInStocks : req.body.countInStocks,
        rating : req.body.rating,
        numReviews : req.body.numReviews
    }

    - Product Updation : PUT: http://localhost:4000/api/v1/products/:id , 
      Passed to Body   :
        {
            name : req.body.name,
            description : req.body.description,
            SKU : req.body.SKU,
            brand : req.body.brand,
            price : req.body.price,
            category : req.body.category,
            countInStocks : req.body.countInStocks,
            rating : req.body.rating,
            numReviews : req.body.numReviews
        }
      
    - Product Deletion : DELETE: http://localhost:4000/api/v1/products/:id ,

    - Find all products : GET: http://localhost:4000/api/v1/products ,
    - Find products by category id's : GET: http://localhost:4000/api/v1/products (can include category id's at last)
    - Find products by Name : GET: http://localhost:4000/api/v1/products/:name
    - Total count of all documents : GET: http://localhost:4000/api/v1/products/get/count

























