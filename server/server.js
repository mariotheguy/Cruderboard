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
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.use('/build', express.static(path.join(__dirname, '../build/main.js')))

app.post('/add_user', controller.addPlayer, (req, res, next) => {
    if (res.locals.exsists) {
        return res.status(200).json("That player already exsists")
    }
    return res.status(200).json("Player added");
})

app.post('/win_loss', controller.winLoss, (req, res, next) => {
    return res.status(200).json("Win loss info updated");
})

app.post('/delete_player', controller.deletePlayer, (req, res, next) => {
    return res.status(200).json("Player deleted");
})

app.get('/player_data', controller.getData, (req, res, next) =>  {
    return res.status(200).json(res.locals.queryResults);
})


app.listen(port, () => console.log(`Listening on port: ${port}`));