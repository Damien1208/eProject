const router = require('express').Router()
const item = require('../controllers/item')

router.get('/items', item.getAll)
router.post('/item/create', item.createOne)

module.exports = router
