const express = require('express')
const router = express.Router()
const control = require('../controller/basicController')

router.get('/', control)

// router.route('/profile').get(protect, userProfileController).put(protect, userProfileUpdateController)

module.exports = router