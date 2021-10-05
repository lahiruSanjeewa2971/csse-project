import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'
import UserAPI from './Components/api/UserAPI'
import EmployeeAPI from './Components/api/manager/EmployeeAPI'

import OrdersAPI from './Components/api/PSA/ViewOrderAPI'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token, setToken] = useState(false)
    

    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.get('/user/refresh_token')
        
                setToken(res.data.accesstoken)
    
                setTimeout(()=>{
                    refreshToken()
    
                }, 10 * 60 * 1000)
            }
        
            refreshToken()
        }
 
    }, [])


    const state = {
        token: [token, setToken],
        userAPI: UserAPI(token),
        employeeList: EmployeeAPI(),

        ordersAPI: OrdersAPI()
    }
    
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}