var express = require("express"),
    app = express(),
    setup = require('./controllers/setup'),
    bodyParser = require("body-parser"),
    jsonParser = bodyParser.json();

app.get('/', function(req, res){
    res.send("hello world");
});

app.post('/api',jsonParser, function(req, res) {
    if(!req.body){
        return res.sendStatus(400);
    }
    console.log(req.body);
});

app.post('/entry',jsonParser, setup.init);

app.listen(3000, function(){
    console.log("Listening to 3000");
});
