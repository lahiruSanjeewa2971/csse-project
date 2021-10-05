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


    router.route("/getorders").post( (req, res) => {
        Researcher.find({orderID: req.body.orderID}, (docs, err) => {
            if(!err){
                res.send(docs);
            }
            else{
                res.send(err);
            }
        })
    })
module.exports = router