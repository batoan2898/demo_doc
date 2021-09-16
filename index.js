var express = require('express')
var app = express()

var todos =[{
  id: 1,
  description: 'Build a simple API - nodejs',
  completed: false
 }, {
  id: 2,
  description: 'Go to T-beer - team building',
  completed: false
 }, {
  id: 3,
  description: 'Feed the dog ',
  completed: true
 }];

var requestTime = function (req, res, next){
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/list',function (req, res){
  res.json(todos)
})

app.get('/',function (req, res){
  res.sendFile(__dirname + "/index.html")
})

app.listen(3000)


module.exports = app;
