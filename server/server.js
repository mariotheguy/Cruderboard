const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');

/**
 * handle parsing request body
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());



app.get('/', (req, res, next) => {
    res.status(200);
    res.header('content-type: text/html; charset=UTF-8');
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.post('/add_user', (req, res, next) => {
    console.log(req.body);
    return next();
})

app.listen(port, () => console.log(`Listening on port: ${port}`));