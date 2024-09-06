const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize app and Stripe with your secret key
const app = express();
const stripe = Stripe('sk_test_51PvrbhDd9MuTJeveJGEbW4iRU27XiPGTcLvzwuQMrPUHS6cwutcBUvLTLn7v755dGIOURj638J45u6vV1lsQHRAx00xpYGFugP');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Payment route
app.post('/payment', async (req, res) => {
    const { amount, token } = req.body;

    try {
        const charge = await stripe.charges.create({
            amount: amount * 100, // Convert to cents
            currency: 'usd',
            source: token.id,
            description: 'Pro Shop Payment',
        });

        res.status(200).send({ success: charge });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});







const express = require('express');
const db = require('./database');
const app = express();
app.use(express.json());

// Add Product
app.post('/add-product', (req, res) => {
    const { name, price, description, image } = req.body;
    const sql = 'INSERT INTO products (name, price, description, image) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, price, description, image], (err, result) => {
        if (err) throw err;
        res.send('Product added successfully!');
    });
});

// Get Products
app.get('/products', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// Delete Product
app.delete('/delete-product/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM products WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.send('Product deleted successfully!');
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
