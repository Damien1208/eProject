const router = require('express').Router()
const user = require('../controllers/user')

router.get('/users/', user.getAll)
router.get('/user/:id', user.getById)
router.post('/user/', user.addOne)
router.delete('/user/:id', user.deleteOne)
router.put('/user/:id', user.updateOne)

module.exports = router
