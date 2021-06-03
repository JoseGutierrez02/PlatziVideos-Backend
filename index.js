const express = require('express');
const app = express();
const { config } = require('./config');
const moviesApi = require('./routes/movies');
const {
  logErrors,
  wrapError,
  errorHandler,
} = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body-parser middleware
app.use(express.json());

// routes
moviesApi(app);

// not found handler
app.use(notFoundHandler);

// error-handling middleware
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server listening at http://localhost:${config.port}`);
});
