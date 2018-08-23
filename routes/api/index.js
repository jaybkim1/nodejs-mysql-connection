const router = require('express').Router()
const controller = require('./user.controller')

router.get('/login', controller.login)
router.get('/join', controller.join)
router.get('/delete-account', controller.deleteAccount)
router.get('/password-change', controller.passwordChange)
router.get('/show-all-data', controller.showAllData)

module.exports = router

