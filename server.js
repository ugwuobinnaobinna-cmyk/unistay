const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json()); 

const House = require('./models/house');


const dbURI = "mongodb+srv://unistay_admin:pahtreek123@cluster0.d7ly35s.mongodb.net/unistay_db?retryWrites=true&w=majority";


mongoose.connect(dbURI)
    .then(() => console.log("🚀 Connection Successful: Warehouse is open!"))
    .catch((err) => console.log("❌ Connection Error:", err));



app.post('/api/houses', async (req, res) => {
    const { title, price, location, description,bedrooms,bathrooms,images,furnished,badge, adminKey } = req.body;

    
    if (adminKey !== 'pahtreek123') {
        return res.status(401).send("❌ Unauthorized: Wrong Secret Key!");
    }

   
    try {
        const newHouse = new House({ title, price, location, description, bedrooms,bathrooms,furnished,badge, images });
        await newHouse.save();
        res.status(200).send("🚀 House Posted Successfully!");
    } catch (err) {
        res.status(500).send("❌ Error saving to database");
    }
});



app.get('/api/houses', async (req, res) => {
    try {
        const houses = await House.find(); 
        res.json(houses); 
    } catch (err) {
        res.status(500).json([]);
    }
});

app.delete('/api/houses/:id', async (req, res) => {
    try {
        await House.findByIdAndDelete(req.params.id);
        res.json({ message: "House deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete" });
    }
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}!`);
});