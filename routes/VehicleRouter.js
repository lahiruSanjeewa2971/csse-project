const router = require('express').Router()
const vehicleCtrl = require('../controllers/VehicleCtrl')

router.route('/vehicle')
    .get(vehicleCtrl.getVehicleList)
    .post(vehicleCtrl.createVehicleRecord)


module.exports = router