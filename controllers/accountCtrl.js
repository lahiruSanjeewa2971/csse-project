const Accounts = require('../models//AccountModel')

const AccountCtrl = {
    createnewAccount: async (req, res) => {
        try {
            const {
                accountName,
                description,
                accountPrice,
                accountIncharge,
            
            } = req.body;

            const account = await Accounts.findOne({accountName})
            if(account) return res.status(400).json({msg: "The Account is already exists"})

        } catch (err) {
            
        }
    }
     
}