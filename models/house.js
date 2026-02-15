const mongoose = require('mongoose');


const houseSchema = new mongoose.Schema({
    title: { type: String, default:'untitled Property' },
    price: { type: Number, default: 0},
    location: { type: String, default: 'Contact for location' },
    bedrooms: {type: Number},
    bathrooms: {type: Number},
    furnished: {type: String},
    badge: {type: String, default:"New"},
    description: { type: String },
    images: [String], // This [] means it can hold a LIST of multiple image URLs
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('House', houseSchema);
