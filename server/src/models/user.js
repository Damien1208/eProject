const db = require('./db')

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM user', function (err, rows) {
            if (err) return done(err)
            resolve(rows)
        })
    })
}