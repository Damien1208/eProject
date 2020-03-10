const item = require('../models/item')

exports.getAll = async (req, res) => {
  res.send(await item.getAll())
}

exports.createOne = async (req, res) => {
  res.send(await item.createOne(req.body))
}

exports.getOne = async (req, res) => {
  res.send(await item.getOne(req.params.id))
}
