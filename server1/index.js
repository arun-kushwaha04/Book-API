const express = require('express');
const app = express();
const cors = require('cors');
const rateLimit = require('express-rate-limit');

require('./config/db'); //connecting to db
const bookRoute = require('./routes/book');
const authorRoute = require('./routes/author');
const memberRoute = require('./routes/member');

//configuring rate limit
const limiter = rateLimit({
 windowMs: 10 * 60 * 1000, // window size is of 10 minute
 max: 100,
 standardHeaders: true,
 legacyHeaders: false,
});

app.use(limiter);
app.use(express.json());
app.use(cors());

app.use('/books', bookRoute);
app.use('/authorRoute', authorRoute);
app.use('/memberRoute', memberRoute);

app.listen(process.env.PORT || 8000, () => {
 console.log('Server started successfully');
});
