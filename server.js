const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle checkout form submission
app.post('/checkout', (req, res) => {
    const checkoutData = req.body;

    // Read existing data from JSON file
    fs.readFile('checkout-data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read data' });
        }

        let jsonData = [];
        if (data) {
            jsonData = JSON.parse(data);
        }

        // Add new checkout data
        jsonData.push(checkoutData);

        // Write updated data back to JSON file
        fs.writeFile('checkout-data.json', JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to save data' });
            }
            res.status(200).json({ message: 'Checkout data saved successfully' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
