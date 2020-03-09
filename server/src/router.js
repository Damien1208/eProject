const router = require('express').Router();
const user = require('./controllers/user')

router.get('/', user.getAll)
router.get('/:id', user.getById)

module.exports = router;