const express = require('express');

// Set up Express server and JSON parsing of API requests
const app = express();
// Allow Cross Origin Requests
app.use('/:id', express.static('client/dist'));
app.listen(3000, () => console.log('Listening on 3000...'));
/* --------------------------------------------------------------------------------------------- */
