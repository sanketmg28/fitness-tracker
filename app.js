const express = require('express');
const dotenv = require('dotenv');

// Load environment variables (optional, if needed)
dotenv.config();

//Create an express app
const app = express();

//Middleware to parse incoming JSON data
app.use(express.json());

//routes
app.use('/api/workouts', require('./Routes/workout'));

//start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});

