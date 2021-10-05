
import React, {useContext} from 'react'
import {GlobalState} from '../../../../GlobalState'
import {
    makeStyles,
    
    } from '@material-ui/core';
import { flexbox } from '@mui/system';


function OrderFilter() {

    const state = useContext(GlobalState)
  

    const [search, setSearch] = state.orderList.search

  
    return (
        <div  className="orderfiltermenu" style={{display: 'flex', marginLeft: '20px'}}>
            
            <input style={{width: '500px', marginLeft: '23px', marginTop: '18px'}} type="text" value={search} placeholder="Enter  creater name !" onChange={e => setSearch(e.target.value.toLowerCase())}/>
            
        
        </div>
    )
}

export default OrderFilter
