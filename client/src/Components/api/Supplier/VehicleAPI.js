import  {useState, useEffect} from 'react'
import axios from 'axios'

function VehicleAPI() {
    const [vehicle, setVehicle] = useState([])
    const [callback, setCallback] = useState(false)
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

   useEffect(()=>{
       const getvehicles = async () =>{
        const res = await axios.get(`/supplier/vehicle?limit=${page*10}&vehicleName[regex]=${search}`)
        setVehicle(res.data.vehicles)
        setResult(res.data.result)
        console.log(res.data.vehicles)
       }
       getvehicles()
   }, [callback, page, search])
       
    return {
        vehicles: [vehicle, setVehicle],
        callback: [callback, setCallback],
        search: [search, setSearch],
        sort: [sort, setSort],
        page:[page, setPage],
        result:[result, setResult]
    }
}
 
export default VehicleAPI
