const express = require('express');
const path = require('path');

const app = express();

let clothes = [
    {
        id: 1,
        name: dress,
        price: 50,
        brand: Mango,
        size: S,
        color: black,
        inStock: true, 
    },
    {
        id: 2,
        name: blouse,
        price: 20,
        brand: H&M,
        size: M,
        color: white,
        inStock: false, 
    },
    {
        id: 3,
        name: skirt,
        price: 40,
        brand: Cubus,
        size: S,
        color: black,
        inStock: true, 
    },
    {
        id: 4,
        name: pants,
        price: 90,
        brand: Carlings,
        size: M,
        color: brown,
        inStock: true, 
    }
]

app.get('/api/products'), (req,res) => {
    res.json(products);
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));