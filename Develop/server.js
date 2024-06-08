const express = require('express');
const fs = require('fs');
const path = require('path');
const routes = require('./public/assets/js');
const index = require('./public/assets/js/index')


const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Attach routes
app.use(routes);
app.use(index);

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});