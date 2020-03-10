const router = require('express').Router()
const item = require('../controllers/item')

router.get('/items', item.getAll)
router.get('/items/:id', item.getOne)
router.post('/item/create', item.createOne)

module.exports = router
