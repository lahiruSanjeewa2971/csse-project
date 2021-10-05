import React, {useState} from 'react'
import '../../Sites/CreateSites/CreateSite.css'
import axios from 'axios'

const initialState = {
    siteName: '',
    location: '',
    description: '',
    estimatePrice: '',
    siteManager: ''
}

function NewPolicy() {

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
            <h3>New Policy Details</h3>
                <form onSubmit={submitSiteDetails}>
                    <div className="form-new-site">
                        <label htmlFor="siteName" >Policy ID</label>
                        <input type="text" required value={newSite.siteName} name="siteName" 
                            onChange={onChangeInput} />
                    </div>
                    <div className="form-new-site">
                        <label htmlFor="location" >Policy Topic</label>
                        <input type="text" required value={newSite.location} name="location" 
                            onChange={onChangeInput} />
                    </div>
                    <div className="form-new-site">
                        <label htmlFor="description">Content</label>
                        <textarea type="text" required value={newSite.description} name="description" 
                            onChange={onChangeInput} />
                    </div>
                    
                    <button className="addEmp">Save Site</button>
                </form>
            </div>
        </div>
    )
}

export default NewPolicy
