const Author = require('../models/author');
const Member = require('../models/member');
const Book = require('../models/book');

exports.addBook = async (req, res) => {
 try {
  const {
   isbn,
   title,
   authorId,
   publisherName,
   isIssued,
   issuedTo,
   dateOfAddedToLibrary,
  } = req.body;

  const book = new Book({
   isbn,
   title,
   authorId,
   publisherName,
   isIssued,
   issuedTo,
   dateOfAddedToLibrary,
  });

  await book.save();

  return res.status(200).json({
   payload: book,
   message: 'New book created',
   status: 200,
  });
 } catch (error) {
  console.log(error);
  res.status(503).json({
   payload: null,
   status: 503,
   message: 'Failed to create book',
  });
 }
};

exports.addAuthor = async (req, res) => {
 try {
  const { firstName, lastName } = req.body;

  const author = new Author({
   firstName,
   lastName,
  });

  await author.save();

  return res.status(200).json({
   payload: author,
   message: 'New author created',
   status: 200,
  });
 } catch (error) {
  console.log(error);
  res.status(503).json({
   payload: null,
   status: 503,
   message: 'Failed to create author',
  });
 }
};

exports.addMember = async (req, res) => {
 try {
  const { firstName, lastName, dateOfMemberShip, address } = req.body;

  const member = new Member({
   firstName,
   lastName,
   dateOfMemberShip,
   address,
  });

  await member.save();

  return res.status(200).json({
   payload: member,
   message: 'New member created',
   status: 200,
  });
 } catch (error) {
  console.log(error);
  res.status(503).json({
   payload: null,
   status: 503,
   message: 'Failed to create member',
  });
 }
};

exports.updateBook = async (req, res) => {
 try {
  const {
   bookId,
   isbn,
   title,
   authorId,
   publisherName,
   isIssued,
   issuedTo,
   dateOfAddedToLibrary,
  } = req.body;

  const book = Book.findById(bookId);
  book = {
   isbn,
   title,
   authorId,
   publisherName,
   isIssued,
   issuedTo,
   dateOfAddedToLibrary,
  };

  await book.save();

  return res.status(200).json({
   payload: book,
   message: 'Book updated',
   status: 200,
  });
 } catch (error) {
  console.log(error);
  return res.status(503).json({
   payload: null,
   status: 503,
   message: 'Failed to update book',
  });
 }
};

exports.deleteBook = async (req, res) => {
 try {
  const { bookId } = req.body;
  await Book.findByIdAndDelete(bookId);
  return res.status(200).json({
   payload: bookId,
   message: 'Book deleted',
   status: 200,
  });
 } catch (error) {
  console.log(error);
  return res.status(503).json({
   payload: null,
   status: 503,
   message: 'Failed to delete book',
  });
 }
};
