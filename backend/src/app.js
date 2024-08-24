const express = require('express');
const app = express();
const indexRouter = require('./routes/index');

// Middleware to parse JSON bodies
app.use(express.json());

// Use the index router
app.use('/', indexRouter);

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Backend service is running on http://localhost:${PORT}`);
});