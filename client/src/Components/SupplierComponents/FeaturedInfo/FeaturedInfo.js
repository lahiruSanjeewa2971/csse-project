import React, {useContext, useEffect, useState} from 'react'
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"
import { GlobalState } from '../../../GlobalState';
import axios from 'axios';
import './FeaturedInfo.css';
function FeaturedInfo() {
    const state = useContext(GlobalState)
    const [orderList] = state.orderList.orderList
    const [vehicleList] = state.vehicleList.vehicles
    const [] = useState([]);
    


    
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Vehicles</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{vehicleList.length}</span>
                    <span className="featuredMoneyRate">
                        -10.4<ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2300</span>
                    <span className="featuredMoneyRate">
                        -9.4<ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Orders</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{orderList.length}</span>
                    <span className="featuredMoneyRate">
                        +15<ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            
        </div>
    )
}

export default FeaturedInfo
