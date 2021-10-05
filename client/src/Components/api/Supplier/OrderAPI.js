import  {useState, useEffect} from 'react'
import axios from 'axios'

function OrderAPI() {
    const [order, setorder] = useState([])
    const [callback, setCallback] = useState(false)
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

   useEffect(()=>{
       const getOrders = async () =>{
        const res = await axios.get(`/supplier/order?limit=${page*10}&createrName[regex]=${search}`)
        setorder(res.data.orders)
        setResult(res.data.result)
        console.log(res.data)
       }
       getOrders()
   }, [callback, page, search])
       
    return {
        orderList: [order, setorder],
        callback: [callback, setCallback],
        search: [search, setSearch],
        sort: [sort, setSort],
        page:[page, setPage],
        result:[result, setResult]
    }
}
 
export default OrderAPI
