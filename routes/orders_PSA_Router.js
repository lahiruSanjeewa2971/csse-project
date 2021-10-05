const router = require('express').Router()
const EdataCtrl = require('../controllers/orders_PSA_Ctrl')

router.route('/orders')
    .get(EdataCtrl.getOrder)


router.route('/orders/:id')
    .get(EdataCtrl.getSingleOrder)
    .delete(EdataCtrl.deleteOrder)

router.route('/orderupdate/:id')
     .put(EdataCtrl.updateStatus)

 module.exports = router