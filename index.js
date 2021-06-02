const express = require('express');
const app = express();
const { config } = require('./config');
const moviesApi = require('./routes/movies');
const { logErrors, errorHandler } = require('./utils/middleware/errorHandler');

// body-parser middleware
app.use(express.json());

// routes
moviesApi(app);

// error-handling middleware
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server listening at http://localhost:${config.port}`);
});
