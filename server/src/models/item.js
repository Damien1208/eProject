const db = require('./db')

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM item', function (err, rows) {
      if (err) console.log(err)
      resolve(rows)
    })
  })
}

exports.createOne = (newItem) => {
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO item(productName, description, image, price) 
        VALUES('${newItem.productName}', '${newItem.description}', '${newItem.image}', '${newItem.price}')`, function (err, addRow) {
      if (err) console.log(err)
      resolve(addRow)
    })
  })
}

exports.getOne = (id) => {
  console.log(id)
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM item WHERE id = ${id}`, function (err, selectedRow) {
      if (err) console.log(err)
      resolve(selectedRow)
    })
  })
}

exports.deleteOne = (id) => {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM item WHERE id = ${id}`, function (err, deletedRow) {
      if (err) console.log(err)
      resolve(deletedRow)
    })
  })
}
