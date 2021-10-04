const Vehicle = require('../models/VehicleModel')
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
            res.json({msg: "Added New Vehicle."})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getVehicleList: async (req, res) => {
        try {
            const vehicle = await Vehicle.find()
            res.json(vehicle)

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}

module.exports = vehicleCtrl