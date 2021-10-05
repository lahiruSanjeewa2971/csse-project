const Vehicle = require('../models/VehicleModel')

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
        const limit = this.queryString.limit * 1 || 9
        const skip = (page -1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const vehicleCtrl = {
    createVehicleRecord: async (req, res) => {
        try {
            const {
                vehicleID,
                vehicleName,
                images,
                ownerName,
                ownerMobile,
                location
            } = req.body;

            if(!images) return res.status(400).json({msg: "No image upload"})

            const existingVehicle = await Vehicle.findOne({vehicleID})

            if(existingVehicle)
                return res.status(400).json({msg: "This vehicle already exists."})

            const newVehicle = new Vehicle({
                vehicleID,
                vehicleName,
                images,
                ownerName,
                ownerMobile,
                location
            })
            await newVehicle.save()
            res.json({vehicleID})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getVehicleList: async (req, res) => {
        try {
            console.log(req.query)
            const features = new APIfeatures(Vehicle.find(), req.query).filtering().sorting().paginating()
            const vehicles = await features.query

            res.json({
                status: 'success',
                result: vehicles.length,
                vehicles: vehicles
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}

module.exports = vehicleCtrl