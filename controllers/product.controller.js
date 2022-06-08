const { products } = require('../models/product.model');

function getProducts(req, res) {
    res.json(products());
}

module.exports = {
    getProducts
}