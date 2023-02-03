const pool = require('../db.js')


const index = (req, res, next) => {
    res.send('Landing Page');
}

const ping = async(req, res, next) => {
    let [result] = await pool.query('SELECT 1+1 AS result;')
    res.json(result[0])
}

module.exports = {
    ping,
    index
}