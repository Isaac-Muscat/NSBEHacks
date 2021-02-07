

const express = require('express');
const ejs = require('ejs');

const app = express();


app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));
app.set('view engine', 'ejs');

app.get('/', function(request,  response){
	response.render('pages/index');
});

app.get('/messaging', function(request,  response){
	response.render('pages/messaging');
});

app.get('/emergency', function(request,  response){
	response.render('pages/emergency');
});

app.get('/info', function(request,  response){
	response.render('pages/info');
});

app.get('/hospitals', function(request,  response){
	response.render('pages/hospitals');
});


app.listen(8080);

