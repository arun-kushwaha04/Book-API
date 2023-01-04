const express = require('express');
const router = express.Router();

const { addMember } = require('../controllers/book');

router.post('/create', addMember);

module.exports = router;
