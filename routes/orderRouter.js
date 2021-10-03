const router = require('express').Router()
const OrdersCtrl = require('../controllers/ordersController')

const auth = require('../middleware/auth');

router.route('/order')
    .get(OrdersCtrl.getOrders)
    .post(OrdersCtrl.createOrder)

router.route('/order/:id')
    .delete(OrdersCtrl.deleteOrder)
    .put(OrdersCtrl.updateOrder)
    .get(OrdersCtrl.getSingleOrder)

router.route('/orderupdate/:id')
    .put(OrdersCtrl.updateStatus)

router.route('/additems/:id')
    .patch(auth, OrdersCtrl.addItemList)

router.route('/calculateAmount/:id')
    .get(OrdersCtrl.calculateAmount)
module.exports = router