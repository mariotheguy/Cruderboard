const db = require("../db/queries");

const controller = {};

controller.addPlayer = (req, res, next) => {
    const val = [req.body.player];
    console.log(val);
    const text = 'INSERT INTO public.players (player_name, player_wins, player_losses) VALUES ($1 , 0, 0);'
    const text2 = 'SELECT player_id FROM players where player_name=($1)'

    db.query(text2, val, (error, results) => {
        if (error) {
            throw error
        }

        if (results.rows.length) {
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
    const valWin = [req.body.winner];
    const valLoss = [req.body.loser];
    const winText = 'Update players Set player_wins = player_wins + 1 Where player_name=($1)';
    const lossText = 'Update players Set player_losses = player_losses + 1 Where player_name=($1)';

    db.query(winText, valWin, (error, results) => {
        if (error) {
            throw error
        }

        db.query(lossText, valLoss, (error, results) => {
            if (error) {
                throw error
            }
        })
    })

    return next();
}

controller.deletePlayer = (req, res, next) => {
    const playerName = [req.body.delPlayer];
    const delText = 'DELETE FROM "public"."players" WHERE ("player_name" = ($1))';

    db.query(delText, playerName, (error, results) => {
        if (error) {
            throw error
        }
    })

    return next();
}

controller.getData = (req, res, next) => {
    const text = 'SELECT player_name FROM players';

    db.query(text, (error, results) => {
        if (error) {
            throw error
        }
        // console.log(results)
        res.locals.queryResults = results.rows;
        return next();
    })

}

controller.getTable = (req, res, next) => {
    const text1 = 'UPDATE players SET player_net = (player_wins - player_losses)';
    const text2 = 'SELECT player_name, player_wins, player_losses, player_net FROM players ORDER BY -(player_net)';
    
    db.query(text1, (error, results) => {
        if (error) {
            throw error
        } 
        db.query(text2, (error, results) => {
            if (error) {
                throw error
            }

            res.locals.tableResults = results.rows;
            return next();
        })
    })
}

module.exports = controller;