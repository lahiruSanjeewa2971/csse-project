const router = require('express').Router()
const orderCtrl = require('../controllers/orders_Supplier_Ctrl')

router.route('/order')
    .get(orderCtrl.getOrdersList)
    
module.exports = router