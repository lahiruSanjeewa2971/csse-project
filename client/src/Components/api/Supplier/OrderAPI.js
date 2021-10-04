import  {useState, useEffect} from 'react'
import axios from 'axios'

function OrderAPI() {
    const [order, setorder] = useState([])
    const [callback, setCallback] = useState(false)

    const getOrderList = async () => {
        const res = await axios.get('/supplier/order')
        setorder(res.data)
        console.log(res.data)
    }

    useEffect(() => {
        getOrderList()
    }, [])

    return {
        orderList: [order, setorder],
        callback: [callback, setCallback]
    }
}
 
export default OrderAPI
