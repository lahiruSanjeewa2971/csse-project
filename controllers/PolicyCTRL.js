const Policies = require('../models/PolicyModel')

const PolicyCTRL = {
    createPolicy: async (req, res) => {
        try {
            const {
                policyID,
                topic,
                content
            } = req.body;

            const policy = await Policies.findOne({policyID})
            if(policy) return res.status(400).json({msg: "The policy ID is already exists"})

            const newPolicy = new Policies({
                policyID,
                topic,
                content
            })

            await newPolicy.save()

            res.json({msg: "Created a new Policy"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getPolocyList: async (req, res) => {
        try {
            const policy = await Policies.find()
            res.json(policy)

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = PolicyCTRL