var mongoose = require('mongoose');

var CommentsSchema = new mongoose.Schema({
  email: String,
  message: String
});

module.exports = mongoose.model('Comment', CommentsSchema);
