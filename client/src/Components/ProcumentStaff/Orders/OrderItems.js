import React, {useState, useEffect, useContext} from 'react' 
import {GlobalState} from '../../../GlobalState'
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import './orderitems.css'



function OrderItems() {
    const state = useContext(GlobalState)

    const params = useParams();

    const [status, setSatus] = useState("");

    const history = useHistory();

    useEffect(()=>{
        axios.post("/psa/getorders", {orderID: params.orderID}).then(res=>{
            const postData = res.data[0];

            setSatus(postData.status);
        }).catch((err) =>{
            console.log(err)
        })
    }, [])
    
    function setResearcherData(){
        const updatedItems={            
            status: status,
            orderID: params.orderID
        }
        axios.post("/psa/orderupdate/:id", updatedItems).then(res => {
            alert(res.data)
            history.push("/")
        }).catch(err => {
            console.log('Order is not updated...', err)
            alert(err)
        })
    }

    return (
        <div>
              <h3 style={{marginLeft: 350, fontSize:40 }}>Accept or Reject Order</h3>
                <div classNaame="box" style={{backgroundColor: 'pink', width: '50%', marginLeft: 280, padding: 10, height: 250}}>
                    <form onSubmit={setResearcherData} >
                    <input type="text" className="form-control" value={status} style={{marginLeft: 120, fontSize:30, marginTop:25}}
                        onChange={(e)=>{
                            setSatus(e.target.value);
                    }}/><br/>

                    <button className="btn btn-outline-primary" style={{marginLeft: 240, fontSize:40, marginTop:25 }} >  Accept </button>

                    </form>

                </div>
              
        </div>
    )
}

export default OrderItems
