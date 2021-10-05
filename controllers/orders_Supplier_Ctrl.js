const Orders = require('../models/EdataModel')

class APIfeatures{
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
        const queryObj = {...this.queryString} //queryString = req.query
        
        const excludedfields = ['page', 'sort', 'limit']
        excludedfields.forEach(el => delete(queryObj[el]))
        
        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match=> '$' + match)

        this.query.find(JSON.parse(queryStr))

        return this;
    }
    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }
        return this;
    }
    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 10
        const skip = (page -1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const OrdersCtrl = {
    getOrdersList: async (req, res) => {
        try {
            console.log(req.query)
            const features = new APIfeatures(Orders.find({"deliveryAddress": {$ne: ""}}), req.query).filtering().sorting().paginating()
            const orders = await features.query

            res.json({
                status: 'success',
                result: orders.length,
                orders: orders
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getSingleOrder: async(req, res) =>{
        try{
            const orderhistory = await Orders.find({_id: req.params.id})

            res.json(orderhistory)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    calculateAmount: async(req, res)=>{
        if(req.params && req.params.id){
            const order = await Orders.findById(req.params.id);
                let totalAmount = 0;
                if(order.itemList.length > 0){
                    order.itemList.map((order)=>{
                        totalAmount += order.amount * order.sold;
                })
    
            }
            res.status(200).send({totalAmount:totalAmount});
        }
    }
}

module.exports = OrdersCtrl