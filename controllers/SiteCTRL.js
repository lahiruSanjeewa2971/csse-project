const Sites = require('../models/SiteModel')

const SiteCTRL = {
    createNewSite: async (req, res) => {
        try {
            const {
                siteName,
                location,
                description,
                estimatePrice,
                siteManager,
            } = req.body;

            const site = await Sites.findOne({siteName, location})
            if(site) return res.status(400).json({msg: "The site is already exists"})

            const newSite = new Sites({
                siteName,
                location,
                description,
                estimatePrice,
                siteManager
            })

            await newSite.save()

            res.json({msg: "Created a new Site"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getSitesList: async (req, res) => {
        try {
            const site = await Sites.find()
            res.json(site)

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = SiteCTRL