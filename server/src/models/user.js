const db = require('./db')

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM user', function (err, rows) {
            if (err) console.log(err)
            resolve(rows)
        })
    })
}

exports.getById = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM user WHERE id = ${id}`, function(err, selectedRow) {
            if (err) console.log(err)
            resolve(selectedRow)
        })
    })
}