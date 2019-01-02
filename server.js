// MEAN Stack RESTful API Tutorial - Contact List App
var express = require('express');
var app = express();
var request    = require("request");
// var mongojs = require('mongojs');
// var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

app.get('/entities', function (req, res1) {
  request({
  		url: "https://sandbox.fundamerica.com/api/entities",
  		method: 'GET',
  		headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        "Authorization": 'Basic akhhR2tWN3hCcV83Zm96Q2g3ckhEZThITkdJb0R0blY6'
  		}
  	}, function(error, res, body){
      if (error) {
         return console.error('upload failed:', error);
       }
       res1.json(body);
  }).end();
});

app.post('/entities', function (req, res) {
  // console.log(req.body);
  // db.contactlist.insert(req.body, function(err, doc) {
  //   res.json(doc);
  // });
});

app.delete('/entities/:id', function (req, res) {
  // var id = req.params.id;
  // console.log(id);
  // db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
  //   res.json(doc);
  // });
});

app.get('/entities/:id', function (req, res) {
  // var id = req.params.id;
  // console.log(id);
  // db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
  //   res.json(doc);
  // });
});

app.put('/entities/:id', function (req, res) {
  // var id = req.params.id;
  // console.log(req.body.name);
  // db.contactlist.findAndModify({
  //   query: {_id: mongojs.ObjectId(id)},
  //   update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
  //   new: true}, function (err, doc) {
  //     res.json(doc);
  //   }
  // );
});


app.get('/offerings', function (req, res1) {
  request({
  		url: "https://sandbox.fundamerica.com/api/offerings",
  		method: 'GET',
  		headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        "Authorization": 'Basic akhhR2tWN3hCcV83Zm96Q2g3ckhEZThITkdJb0R0blY6'
  		}
  	}, function(error, res, body){
      if (error) {
         return console.error('upload failed:', error);
       }
       res1.json(body);
  }).end();
});
app.put('/offerings/:id', function (req, res1) {
  request({
      url: "https://sandbox.fundamerica.com/api/test_mode/offerings"+req.params.id,
      method: 'PATCH',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        "Authorization": 'Basic akhhR2tWN3hCcV83Zm96Q2g3ckhEZThITkdJb0R0blY6'
      },
      form: req.body,
      json: true
    }, function(error, res, body){
      if (error) {
         return console.error('upload failed:', error);
       }
       res1.json(body);
  })
});

app.get('/investments', function (req, res1) {
  request({
  		url: "https://sandbox.fundamerica.com/api/investments",
  		method: 'GET',
  		headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        "Authorization": 'Basic akhhR2tWN3hCcV83Zm96Q2g3ckhEZThITkdJb0R0blY6'
  		}
  	}, function(error, res, body){
      if (error) {
         return console.error('upload failed:', error);
       }
       res1.json(body);
  }).end();
});

app.post('/investments', function (req, res1) {
  request({
  		url: "https://sandbox.fundamerica.com/api/investments",
  		method: 'post',
  		headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        "Authorization": 'Basic akhhR2tWN3hCcV83Zm96Q2g3ckhEZThITkdJb0R0blY6'
  		},
      form:  req.body,
      //json: true
  	}, function(error, res, body){
      if (error) {
         return console.error('upload failed:', error);
       }
       res1.json(body);
  })
  //.end();
});

app.listen(8080);
console.log("Server running on port 8080");
