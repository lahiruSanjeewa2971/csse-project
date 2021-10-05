import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'

function OrderItems() {
    const state = useContext(GlobalState)
    // const [history] = state.ordersAPI.ordersNew
    // const [orderDetails, setOrderDetails] = useState([])


    // const params = useParams()

    // useEffect(() => {
    //     if(params.id){
    //         history.forEach(item =>{
    //             if(item._id === params.id) setOrderDetails(item)
    //         })
    //     }
    // },[params.id, history])

    // if(orderDetails.length === 0) return null;

    // console.log(orderDetails)

    return (
        <div>
            {/* <h2 style={{fontSize: "35px"}}>User Details of {orderDetails.name} </h2>
            <table>
                <thead>
                    <tr>
                        <th>Creater Name</th>
                        <th>Description</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{color: "blue", fontSize: "25px"}}>{orderDetails.createrName}</td> 
                        <td style={{color: "black", fontSize: "25px"}}>{orderDetails.description}</td>
                         
                    </tr>
                </tbody>
            </table>

            <h2 style={{fontSize: "35px"}}>Order Details</h2>


            <table style={{margin: "30px 0px"}}>
                <thead>
                    <tr>
                         
                        <th>Name</th>
                        <th>Amount</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        orderDetails.cart.itemList(item =>(
                        <tr key={item._id}> 
                            <td style={{color: "blue", fontSize: "25px"}}>{item.name}</td>
                            <td style={{color: "black", fontSize: "25px"}}>{item.amount}</td> 
                        </tr>
                        ))
                    }
                    
                </tbody>
            </table>
             */}
             Hasitha saranga
        </div>
    )
}

export default OrderItems
