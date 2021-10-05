const Orders = require('../models/EdataModel')

const OrdersCtrl = {
    getOrdersList: async (req, res) => {
        try {
            const order = await Orders.find({"deliveryAddress": {$ne: ""}})
            res.json(order)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = OrdersCtrl