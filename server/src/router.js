const router = require('express').Router()
const user = require('./controllers/user')
const item = require('./controllers/item')

router.get('/users/', user.getAll)
router.get('/user/:id', user.getById)
router.post('/user/', user.addOne)
router.delete('/user/:id', user.deleteOne)
router.put('/user/:id', user.updateOne)
router.get('/items', item.getAll)

module.exports = router
