const mongoose = require('mongoose');

const member = mongoose.Schema({
 firstName: {
  type: 'string',
  require: true,
 },
 lastName: {
  type: 'string',
 },
 dateOfMemberShip: {
  type: 'string',
  require: true,
 },
 address: {
  type: 'string',
  require: true,
 },
});

module.exports = mongoose.model('Member', member);
