import React, {useState} from 'react'
import axios from 'axios'
import Loading from '../../loading/Loading'
import './CreateVehicle.css'

const initialState = {
    vehicleID: '',
    vehicleName: '',
    images: '',
    ownerName: '',
    ownerMobile: '',
    location: ''
}

function AddVehicles() {

    const [loading, setLoading] = useState(false)
    const [images, setImages] = useState(false)
    const [vehicleDetails, setvehicleDetails] = useState(initialState)

    const handleChangeInput = e => { 
        const {name, value} = e.target
        setvehicleDetails({...vehicleDetails, [name]:value})
    }

    const styleUpload = {
        display: images ? "block" : "none"
    }

    const handleUpload = async e => {
        e.preventDefault()
        try {
            const file = e.target.files[0]
            
            if(!file) return alert("File not uploaded.")

            if(file.size > (1024 * 1024) * 12)
                return alert("File is too large.")

            if(file.type !== 'image/jpeg' && file.type !== 'image/png')
                return alert("File format is incorrect.")

            let formData = new FormData()
            formData.append('file', file)
            setLoading(true)
            const res = await axios.post('/supplier/uploadImage', formData, {
                headers: {'content-type': 'multipart/form-data'}
            })
            setLoading(false)
            setImages(res.data)
        } catch (err) {
            alert(err.responce.data.msg)
        }
    }

    const handleDestroy = async () => {
        try {
            setLoading(true)
            await axios.post('/supplier/destroy', {public_id: images.public_id})
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.responce.data.msg)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if(!images) return alert("No image upload")
            await axios.post('/supplier/vehicle', {...vehicleDetails, images})
            setImages(false)
            setvehicleDetails(initialState)
            alert("Vehicle Added...")
            
        } catch (err) {
            alert("error occur")
        }
    }
    
    return (
        <div>
            <h2>Add New Vehicle</h2>
            <div className="create_category">
                <div className="upload">
                    <input type="file" name="file" id="file_up" onChange={handleUpload} />
                    {
                        loading ? <div id="file_img"><Loading /></div>

                        :<div id="file_img" style={styleUpload}>
                            <img src={images ? images.url : ''} alt="" />
                            <span onClick={handleDestroy}>X</span>
                        </div>
                    }
                </div>

                <div className="main-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <label htmlFor="vehicleID">Vehicle ID</label>
                            <input type="text" name="vehicleID" id="vehicleID" required value={vehicleDetails.vehicleID} 
                                onChange={handleChangeInput}/>
                        </div>

                        <div className="form-row">
                            <label htmlFor="vehicleName">Vehicle Name</label>
                            <input type="text" name="vehicleName" id="vehicleName" required value={vehicleDetails.vehicleName} 
                                onChange={handleChangeInput}/>
                        </div>

                        <div className="form-row">
                            <label htmlFor="ownerName">Owner Name</label>
                            <input type="text" name="ownerName" id="ownerName" required value={vehicleDetails.ownerName} 
                                onChange={handleChangeInput}/>
                        </div>

                        <div className="form-row">
                            <label htmlFor="ownerMobile">Owner mobile</label>
                            <input type="text" name="ownerMobile" id="ownerMobile" required value={vehicleDetails.ownerMobile} 
                                onChange={handleChangeInput}/>
                        </div>

                        <div className="form-row">
                            <label htmlFor="location">Location</label>
                            <input type="text" name="location" id="location" required value={vehicleDetails.location} 
                                onChange={handleChangeInput}/>
                        </div>
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddVehicles
