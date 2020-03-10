const item = require('../models/item')

exports.getAll = async (req, res) => {
  res.send(await item.getAll())
}
