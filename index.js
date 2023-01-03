const express = require('express');
const app = express();
const cors = require('cors');

require('./config/db');

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 8000, () => {
 console.log('Server started successfully');
});
