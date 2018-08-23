const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

/* =======================
    PORT
==========================*/
const port = process.env.PORT || 3000 

/* =======================
    EXPRESS CONFIGURATION
==========================*/
const app = express();

// parse JSON and url-encoded query
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// index page, just for testing
app.get('/', (req, res) => {
  res.send('Hello MySQL')
})

// configure api router
app.use('/api', require('./routes/api'))

// open the server
app.listen(port, () => {
  console.log(`Express is running on port ${port}`)
})



module.exports = app;
