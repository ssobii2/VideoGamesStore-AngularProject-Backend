const db = require('../data/database');

function products() {
    return db.prepare('SELECT * FROM products;').all();
}

module.exports = { products };