var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var projectSchema = mongoose.Schema({
    name : String
  });
  
  var Project = mongoose.model('Project', projectSchema);
  

exports.Project = Project;