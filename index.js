const express = require('express');
const app = express();
const cors = require('cors');
require('./config/db');

const bookRoute = require('./routes/book');
const authorRoute = require('./routes/author');
const memberRoute = require('./routes/member');

app.use(express.json());
app.use(cors());

app.use('/books', bookRoute);
app.use('/authorRoute', authorRoute);
app.use('/memberRoute', memberRoute);

app.listen(process.env.PORT || 8000, () => {
 console.log('Server started successfully');
});
