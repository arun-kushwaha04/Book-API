const express = require('express');
const router = express.Router();

const {
 getAllBook,
 addBook,
 updateBook,
 deleteBook,
} = require('../controllers/book');

router.get('/getAll', getAllBook);
router.post('/create', addBook);
router.post('/update', updateBook);
router.post('/delete', deleteBook);

module.exports = router;
