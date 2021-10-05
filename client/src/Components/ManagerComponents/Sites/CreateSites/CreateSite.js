import React, {useState} from 'react'
import './CreateSite.css'
import axios from 'axios'

const initialState = {
    siteName: '',
    location: '',
    description: '',
    estimatePrice: '',
    siteManager: ''
}

function CreateSite() {

    const [newSite, setNewSite] = useState({
        siteName: '',
        location: '',
        description: '',
        estimatePrice: '',
        siteManager: ''
    })

    const onChangeInput = e => {
        const {name, value} = e.target;
        setNewSite({...newSite, [name]:value})
    }

    const submitSiteDetails = async e => {
        e.preventDefault()
        try {
            await axios.post('/manager/sites', {...newSite})
            alert("New Site created...!")
            setNewSite(initialState)
            
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div>
            <div className="create-site-form">
            <h3>New Site Details</h3>
                <form onSubmit={submitSiteDetails}>
                    <div className="form-new-site">
                        <label htmlFor="siteName" >Site Name</label>
                        <input type="text" required value={newSite.siteName} name="siteName" 
                            onChange={onChangeInput} />
                    </div>
                    <div className="form-new-site">
                        <label htmlFor="location" >Site Location</label>
                        <input type="text" required value={newSite.location} name="location" 
                            onChange={onChangeInput} />
                    </div>
                    <div className="form-new-site">
                        <label htmlFor="description">Description</label>
                        <textarea type="text" required value={newSite.description} name="description" 
                            onChange={onChangeInput} />
                    </div>
                    <div className="form-new-site">
                        <label htmlFor="estimatePrice">Estimated Price</label>
                        <input type="text" required value={newSite.estimatePrice} name="estimatePrice" 
                            onChange={onChangeInput} />
                    </div>
                    <div className="form-new-site">
                        <label htmlFor="siteManager">Site Manager Name</label>
                        <input type="text" required value={newSite.siteManager} name="siteManager" 
                            onChange={onChangeInput} />
                    </div>
                    <button className="addEmp">Save Site</button>
                </form>
            </div>
        </div>
    )
}

export default CreateSite
