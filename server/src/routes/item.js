const router = require('express').Router()
const item = require('../controllers/item')

router.get('/items', item.getAll)
router.get('/items/:id', item.getOne)
router.post('/items/create', item.createOne)
// router.put('/items/update/:id', item.updateOne)
router.delete('/items/delete/:id', item.deleteOne)

module.exports = router
