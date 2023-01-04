const mongoose = require('mongoose');

const book = mongoose.Schema({
 isbn: {
  type: 'string',
  require: true,
  unique: true,
 },
 title: {
  type: 'string',
  require: true,
 },
 authorId: {
  type: 'string',
  require: true,
 },
 publisherName: {
  type: 'string',
  requrie: true,
 },
 isIssued: {
  type: 'boolean',
  require: true,
 },
 issuedTo: {
  type: 'string',
 },
 dateOfAddedToLibrary: {
  type: 'string',
  require: true,
 },
});

module.exports = mongoose.model('Book', book);
