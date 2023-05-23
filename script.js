const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

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

  // Send the response
  res.json(result);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
