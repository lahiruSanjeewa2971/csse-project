import React, { useContext } from 'react'
import { GlobalState } from '../../../../GlobalState'
import { Link } from 'react-router-dom'
import './manageOrders.css'

function ViewOrders() {
    const state = useContext(GlobalState)
    const [orderList] = state.orderList.orderList
    
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
                            <th>View Ordered Items</th>
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
                                    <td>
                                        <Link to="#" >View Items</Link>
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

export default ViewOrders
