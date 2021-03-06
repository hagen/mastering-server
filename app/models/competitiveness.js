// app/models/competitiveness.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var compSchema = mongoose.Schema({
  request_id : String,
  rating : Number,
  timestamp : Date
});

// create the model for requests and expose it to our app
module.exports = mongoose.model('Comp', compSchema);
