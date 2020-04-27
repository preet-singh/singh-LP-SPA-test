require('dotenv').config(); 
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3030;

// Set public folder as root
app.use(express.static('public'));

// Allow front-end access to node_modules folder
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Redirect all traffic to index.html
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

// Listen for HTTP requests on port 3030
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});