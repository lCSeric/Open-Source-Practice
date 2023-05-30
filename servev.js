const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Create a database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'mydatabase' // Replace with your database name
});

// Test the database connection
connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Database connection successful!');
});

// POST endpoint for credit calculation
app.post('/calculate', (req, res) => {
  // Get the course and credits from the request body
  const { course, credits } = req.body;

  // Perform credit calculation logic here
  // ...

  // Generate the response
  const result = {
    currentCredits: 100,  // Sample data, replace with actual calculations
    remainingCredits: 50,
    requiredCredits: 120,
    departmentalElectives: 20,
    nonDepartmentalElectives: 15,
    generalEducation: 35
  };

  // Insert the calculation result into the database
  const query = 'INSERT INTO credit_results SET ?';
  connection.query(query, result, (err, insertResult) => {
    if (err) {
      console.error('Error inserting into database:', err);
      res.sendStatus(500);
      return;
    }

    // Send the response
    res.json(result);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
