const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Shoes = mongoose.model('Shoes',{
    name: String,
    brand: String,
    size: Number,
})

module.exports = Shoes

module.exports = mongoose.model('Shoes', Shoes);