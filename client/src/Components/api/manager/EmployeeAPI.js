import  {useState, useEffect} from 'react'
import axios from 'axios'

function EmployeeAPI() {
    const [employee, setemployee] = useState([])
    const [callback, setCallback] = useState(false)

    const getCustomerList = async () => {
        const res = await axios.get('/user/getUserList')
        setemployee(res.data)
        console.log(res.data)
    }

    useEffect(() => {
        getCustomerList()
    }, [])
    
    return {
        employeeList: [employee, setemployee],
        callback: [callback, setCallback]
    }
}
 
export default EmployeeAPI
