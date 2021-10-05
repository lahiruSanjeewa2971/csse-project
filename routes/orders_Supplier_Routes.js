const router = require('express').Router()
const orderCtrl = require('../controllers/orders_Supplier_Ctrl')

router.route('/order')
    .get(orderCtrl.getOrdersList)
    

router.route('/calculateAmount/:id')
    .get(orderCtrl.calculateAmount)
module.exports = router