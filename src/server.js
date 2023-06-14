"use strict"
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const food = require('./routes/food.route.js');
const clothes = require('./routes/clothes.route.js');
const auther = require('./routes/auther.route.js');
const books = require('./routes/books.route.js');
const notFoundHandler = require('./errorhandlers/404.js');
const errorHandler = require('./errorhandlers/500.js');

app.use(express.json());
app.use(food);
app.use(clothes);
app.use(auther);
app.use(books);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('*', notFoundHandler);
app.use(errorHandler);
function start(port){
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
}

module.exports = {
    start: start,
    app: app,
}