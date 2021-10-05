const router = require('express').Router()
const PolicyCTRL = require('../controllers/PolicyCTRL')

router.route('/policy')
    .get(PolicyCTRL.getPolocyList)
    .post(PolicyCTRL.createPolicy)

module.exports = router