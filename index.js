const express = require('express');
const app = express();
const { config } = require('./config');
const moviesApi = require('./routes/movies');

// body-parser middleware
app.use(express.json());

// routes
moviesApi(app);

app.listen(config.port, () => {
  console.log(`Server listening at http://localhost:${config.port}`);
});
