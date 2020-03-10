const Pool = require("pg");

const PG_URI = 
    "postgres://oybfmxjw:fFhz9Me-I9hCLMyoeQIImCCHSynjP8jx@drona.db.elephantsql.com:5432/oybfmxjw";

const pool = new Pool({
    connectionString: PG_URI
})

module.exports = {
    query: (text, params, callback) => {
        console.log("executed query", text);
        return pool.query(text, params, callback);
    }
};