import React, { useContext } from 'react'
import {GlobalState} from '../../../GlobalState'
import { Link } from 'react-router-dom'
import './order.css'

function OrdersView() {
    const state = useContext(GlobalState)
    const [orderList] = state.ordersAPI.ordersNew
    

    console.log(orderList)

    return (
        <div>
            <h2>Orders List</h2>
            <div className="order-manage-page">
                <table>
                    <thead>
                        <tr>
                            {/*<th>Company Name</th>*/}
                            <th>Creater Name</th>
                            <th>Description</th>
                            <th>Ordered Date</th>
                            <th>Number Of items</th>
                            <th>Delivery Address</th>
                            <th>Status</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderList.map(singleOrder => (
                                <tr key={singleOrder._id}>
                                    {/*<td>{singleOrder.companyName}</td>*/}
                                    <td>{singleOrder.createrName}</td>
                                    <td>{singleOrder.description}</td>
                                    <td>{singleOrder.date}</td>
                                    <td>{singleOrder.quantity}</td>
                                    <td>{singleOrder.deliveryAddress}</td>
                                    <td>{singleOrder.status}</td>
                                    <td>
                                        {/* <Link  to={`/neworder/${singleOrder._id}`} >View Items</Link> */}
                                        <a href={`/neworder/${singleOrder._id}`}>View Items</a>
                                    </td>
                                     

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )


}

export default OrdersView
