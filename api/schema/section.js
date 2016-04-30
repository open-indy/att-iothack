var mongoose = require('mongoose');

module.exports = mongoose.Schema({
  id: Number,
  title: String,
  geo: String
});
