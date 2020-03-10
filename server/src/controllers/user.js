const user = require('../models/user')

exports.getAll = async (req, res) => {
  res.json(await user.getAll())
}

exports.getById = async (req, res) => {
  res.json(await user.getById(req.params.id))
}

exports.addOne = async (req, res) => {
  const newUser = req.body
  res.send(await user.addOne(newUser))
}

exports.deleteOne = function (req, res) {
  console.log('heyyyyyy')
  // res.send(
  //     await user.deleteOne(req.params.id)
  // )
}

exports.updateOne = async (req, res) => {
  res.json(await user.updateOne(req.body))
}
