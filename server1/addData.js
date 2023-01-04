// const mongoose = require('mongoose');
require('./config/db');
const Author = require('./models/author');
const Member = require('./models/member');
const Book = require('./models/book');
const bookArray = [
 {
  t: 'The Canterville Ghost',
  ib: '978-9354401534',
  a: '63b483eb8f82554346f78987',
  p: 'Test Publisher',
  i: true,
  it: '63b483eb8f82554346f7898f',
  d: '1672773674207',
 },
 {
  t: 'The Time Machine',
  ib: '978-8175992955',
  a: '63b483eb8f82554346f78989',
  p: 'Test Publisher',
  i: true,
  it: '63b483eb8f82554346f78991',
  d: '1672773674207',
 },
 {
  t: 'Journey to the Centre of the Earth',
  ib: '978-8175994058',
  a: '63b483eb8f82554346f7898b',
  p: 'Test Publisher',
  i: true,
  it: '63b483eb8f82554346f78991',
  d: '1672773674207',
 },
 {
  t: 'The Hidden Hindu',
  ib: '978-0143455691',
  a: '63b483eb8f82554346f7898d',
  p: 'Test Publisher',
  i: true,
  it: '63b483eb8f82554346f78993',
  d: '1672773674207',
 },
];
const authorArray = [
 { fn: 'Oscar', sn: 'Wilde' },
 { fn: 'H. G.', sn: 'Wells' },
 { fn: 'Jules', sn: 'Verne' },
 { fn: 'Akshat', sn: 'Gupta' },
];

const memberArray = [
 {
  fn: 'Tom',
  sn: 'Ridlle',
  date: '1672773674207',
  add: 'Malfoy Mansion, Dream World',
 },
 {
  fn: 'Albus',
  sn: 'Dumbledore',
  date: '1672773674207',
  add: "Godric's Hollow., Dream World",
 },
 {
  fn: 'Sevreus',
  sn: 'Snape',
  date: '1672773674207',
  add: 'Hogwarts, Dream World',
 },
];
const authorId = [
 '63b483eb8f82554346f78987',
 '63b483eb8f82554346f78989',
 '63b483eb8f82554346f7898b',
 '63b483eb8f82554346f7898d',
];
const memberId = [
 '63b483eb8f82554346f7898f',
 '63b483eb8f82554346f78991',
 '63b483eb8f82554346f78993',
];

const addAuthors = async () => {
 for (let author of authorArray) {
  const a = new Author({
   firstName: author.fn,
   lastName: author.sn,
  });
  await a.save();
  authorId.push(a._id);
 }
};

const addMembers = async () => {
 for (let member of memberArray) {
  const a = new Member({
   firstName: member.fn,
   lastName: member.sn,
   dateOfMemberShip: member.date,
   address: member.add,
  });
  await a.save();
  memberId.push(a._id);
 }
};

const addBooks = () => {
 for (let book of bookArray) {
  const a = new Book({
   isbn: book.ib,
   title: book.t,
   authorId: book.a,
   publisherName: book.p,
   isIssued: book.i,
   issuedTo: book.it,
   dateOfAddedToLibrary: book.d,
  });
  a.save();
 }
};

setTimeout(async () => {
 //  await addAuthors();
 //  await addMembers();
 //  console.log(authorId, memberId);
 addBooks();
}, 5000);
