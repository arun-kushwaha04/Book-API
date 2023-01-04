const mongoose = require('mongoose');

const author = mongoose.Schema({
 firstName: {
  type: 'string',
  require: true,
 },
 lastName: {
  type: 'string',
 },
});

module.exports = mongoose.model('Author', author);
