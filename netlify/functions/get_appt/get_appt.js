var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const serverless = require('serverless-http');

var indexRouter = require('../routes/index');

var app = express();

var url = process.env.MONGODB_URI;


MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    const db = client.db(process.env.MONGODB_DATABASE);
    const collection = db.collection(process.env.MONGODB_COLLECTION);    
    app.locals[process.env.MONGODB_COLLECTION] = collection;
    console.log("successed")
  })
  .catch(error => {
    console.log(error);
  });

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use((req, res, next) => {
  const collection = req.app.locals[process.env.MONGODB_COLLECTION];
  req.collection = collection;
  next();
});

app.use('/api', indexRouter);


module.exports = app;
const handler = serverless(app);
module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};