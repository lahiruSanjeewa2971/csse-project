import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import ViewHome from '../Home/ViewHome'
import Login from './Auth/Login'
import {GlobalState} from '../GlobalState'
import NotFound from '../Components/Utils/NotFound'
import Sidebar from './Sidebar/Sidebar'
import PagesX from './PagesX'

function Pages(){
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    return(
        <div >
        <Switch>
            <Route path="/" exact component={ ViewHome} />
            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <div className="container" style={{display: 'flex'}}>
                    <Sidebar/>
                    <PagesX/>

            </div>
            
            
        </Switch>
        </div>
    )
}
  

export default Pages 