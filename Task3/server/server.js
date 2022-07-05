const app = require('express')();
const logger = require('morgan');
require('dotenv').config();
const indexRoutes = require('./routes/index');

// Middleware
// Setup CORS:
// app.use....
app.use(logger('dev'));

// Routes
app.use('/', indexRoutes);

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('Server connected on port:' + PORT);
});
