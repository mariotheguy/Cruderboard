const db = require("../db/queries");

const controller = {};

controller.addPlayer = (req, res, next) => {
    const val = [req.body.user];
    console.log(val);
    const text = 'INSERT INTO public.players (player_name, player_wins, player_losses) VALUES ($1 , 0, 0);'
    const text2 = 'SELECT player_id FROM players where player_name=($1)'

    db.query(text2, val, (error, results) => {
        if (error) {
            throw error
        }

        if (results.length) {
            res.locals.exsists = true;
            return next();
        }
        db.query(text, val, (error, results) => {
        if (error) {
          throw error
        }
    })

    return next();
    })
}

controller.winLoss = (req, res, next) => {
    
}

module.exports = controller;