const db = require('./db')

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM item', function (err, rows) {
      if (err) console.log(err)
      resolve(rows)
    })
  })
}
