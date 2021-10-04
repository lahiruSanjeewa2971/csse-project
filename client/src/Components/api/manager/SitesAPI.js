import  {useState, useEffect} from 'react'
import axios from 'axios'

function SitesAPI() {
    const [sites, setsites] = useState([])
    const [callback, setCallback] = useState(false)

    const getCustomerList = async () => {
        const res = await axios.get('/manager/sites')
        setsites(res.data)
        //console.log(res.data)
    }

    useEffect(() => {
        getCustomerList()
    }, [])
    
    return {
        sitesList: [sites, setsites],
        callback: [callback, setCallback]
    }
}
 
export default SitesAPI
