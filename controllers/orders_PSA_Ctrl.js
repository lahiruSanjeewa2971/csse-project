const Orders = require('../models/EdataModel')


class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }

    filtering(){
        const queryObj = {...this.queryString} //queryString = req.query       

        const excludedFields = ['page', 'sort', 'limit']
        excludedFields.forEach(el => delete(queryObj[el]))  

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|It|Ite|regex)\b/g, match => '$' + match) 
        
        //gt = greater than
        // lt= less than 
        // lte= less than or equal        

        this.query.find(JSON.parse(queryStr))

        return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else {
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 20
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }

}

const EdataCtrl = {
    getOrder: async(req, res) => {
        try {
            const features = new APIfeatures(Orders.find(), req.query).filtering().sorting().paginating()
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

    deleteOrder: async ( req, res ) => {
        try {
            await Orders.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Deleted!"})
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
            
        }
    },

    updateStatus: async(req, res)=>{
        try{
            
           
            await Orders.findOneAndUpdate({_id: req.params.id}, {
                 status : 'Completed'
            })

            res.json({msg: "Updated a Order"})
        }catch(err){
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
}

module.exports = EdataCtrl
