/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bubbles');
var Project = require('./models/project').Project;

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/../bubbles-client/app/views'));
app.use(express.static(__dirname + '/../bubbles-client/app'));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res){
  res.render("index.html");
});
app.get('/api/:userId/project', function(req, res){
  Project.find({user_id : parseInt(req.params.userId)}, function(err, projects) {
    if (err) console.log('hubo error')
    else {
      res.json(projects);
    }
  });

  
});

app.post('api/project', function(req, res){
  console.log('hizo post de project');
  


  myProject.save(function(err) {
    if (err)
      console.log('error en project')
    // TODO handle the error
  });

  
  res.send(200);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
