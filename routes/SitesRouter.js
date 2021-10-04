const router = require('express').Router()
const SitesCTRL = require('../controllers/SiteCTRL')

router.route('/sites')
    .post(SitesCTRL.createNewSite)
    .get(SitesCTRL.getSitesList)

module.exports = router
