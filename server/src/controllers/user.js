const user = require('../models/user')

exports.getAll = async (req, res) => {
    res.json(
        await user.getAll()
    );
};

exports.getById = async (req, res) => {
    res.json(
        await user.getById(req.params.id)
    );
};

exports.addOne = async (req, res) => {
    const newUser = req.body
    res.json(
        await user.addOne(newUser)
    )
}