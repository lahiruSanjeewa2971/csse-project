const router = require('express').Router()
const SitesCTRL = require('../controllers/SiteCTRL')

router.route('/sites')
    .get(SitesCTRL.createNewSite)
    .post(SitesCTRL.getSitesList)

module.exports = router
