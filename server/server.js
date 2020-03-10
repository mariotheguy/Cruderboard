const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');
const controller = require('./controller')

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

app.post('/add_user', controller.addPlayer, (req, res, next) => {
    if (res.locals.exsists) {
        return res.status(200).send("That user is already exsists")
    }
    return res.status(200).send("User added");
})

app.post('/win_loss', (req, res, next) => {
    
})

app.listen(port, () => console.log(`Listening on port: ${port}`));