const user = require('../models/user')

exports.getAll = async (req, res) => {
    res.json(
        await user.getAll()
    );
};