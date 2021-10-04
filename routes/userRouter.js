const router = require('express').Router()
const userCtrl = require('../controllers/userController')
const auth = require('../middleware/auth')

router.post('/register', userCtrl.register)

router.post('/login', userCtrl.login)

router.get('/logout', userCtrl.logout)

router.get('/refresh_token', userCtrl.refreshToken)

router.get('/infor',auth, userCtrl.getUser)

router.get('/getUserList', userCtrl.getUsersList)

module.exports = router