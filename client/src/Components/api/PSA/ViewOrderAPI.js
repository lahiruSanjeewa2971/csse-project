import  {useState, useEffect} from 'react'
import axios from 'axios'

function OrdersAPI() {
    const [order, setorder] = useState([])
    const [callback, setCallback] = useState(false)

    const getOrderList = async () => {
        const res = await axios.get('psa/orders')
        setorder(res.data.orders)
        console.log(res.data.orders)
    }

    useEffect(() => {
        getOrderList()
    }, [])

    return {
        ordersNew : [order, setorder],
        callback: [callback, setCallback]
    }
}

export default OrdersAPI
