const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Simple test route
app.post('/auth/test', (req, res) => {
  res.json({ message: 'Auth test endpoint working', body: req.body });
});

app.listen(3001, () => {
  console.log('Test server running on port 3001');
});
