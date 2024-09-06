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
