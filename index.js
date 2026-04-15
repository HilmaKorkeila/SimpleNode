const express = require('express');
const path = require('path');

const app = express();

let clothes = [
    {
        id: 1,
        name: "dress",
        price: 50,
        brand: "Mango",
        size: "S",
        color: "black",
        inStock: true, 
    },
    {
        id: 2,
        name: "blouse",
        price: 20,
        brand: "H&M",
        size: "M",
        color: "white",
        inStock: false, 
    },
    {
        id: 3,
        name: "skirt",
        price: 40,
        brand: "Cubus",
        size: "S",
        color: "black",
        inStock: true, 
    },
    {
        id: 4,
        name: "pants",
        price: 90,
        brand: "Carlings",
        size: "M",
        color: "brown",
        inStock: true, 
    }
]
// Get all the products 
app.get('/api/clothes', (req,res) => {
    // res.json(clothes);
    res.status(200).json({
        status: 'Success',
        results: clothes.length,
        data: clothes
    })
});

// Get product based on the id 
app.get('/api/clothes/:id', (req,res) => {
    // console.log(req.params.id);
    // res.send("Testing!");

    const id = Number(req.params.id);

    const cloth = clothes.find(cloth => cloth.id === id);
    
    if (cloth)
    {
        res.json(cloth);
    }
    else
        res.status(404).json({
            msg: 'Not found'
    })
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));