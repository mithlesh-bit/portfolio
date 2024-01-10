const express = require('express')
const router = express.Router()
// const auth=require('../middleware/auth')
const controller = require('../controller/controller')

router.post('/count', controller.count)
router.post('/home', controller.homepost)
// router.post('/login', controller.loginPost)
// router.get('/profile',auth, controller.profileGet)
// router.post('/profile', auth,controller.profilePost)


module.exports = router
