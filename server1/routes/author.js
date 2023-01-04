const express = require('express');
const router = express.Router();

const { addAuthor } = require('../controllers/book');

router.post('/create', addAuthor);

module.exports = router;
