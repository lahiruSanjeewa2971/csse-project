import React, { useContext } from 'react'
import {GlobalState} from '../../../GlobalState' 
import './dashboard.css'
import { Link } from 'react-router-dom'
  
function PHome() {
    const state = useContext(GlobalState)
    const [orderList] = state.ordersAPI.ordersNew  
    return (
        <div>
            <div className="foodIcon">
                <div className="icon"> 
                    DASHBOARD 
                </div>  
                            
                {/* <h4>All Foods List</h4> */}
               
            </div>
            <hr />
            <div className="second-group1">

                <div className="second-group-first-box1">
                    <h4>Latest Orders</h4>
                    <h3>You have  {orderList.length} New Orders </h3>
                </div> 

            </div>

            <div className="third-group">
                <div className="third-group-first-box1">
                    <h4 style={{fontSize:35 }}>Account Details</h4>
                    <div className="link">
                        <Link style={{fontSize:35 }} id= "btn_neworder" to={`/acount-details `} >View Accounts</Link>  
 
                    </div>
                    

                </div> 
            </div>



             
        </div>
    )
}

export default PHome
