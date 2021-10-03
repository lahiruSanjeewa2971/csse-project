import  NotFound  from './Utils/NotFound';
import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import MHome from '../Components/Manager/Dashboard/MHome';
import PHome from '../Components/ProcumentStaff/Dashboard/PHome';
import SHome from '../Components/Supplier/Dashboard/SHome';
import {GlobalState} from '../GlobalState';
function PagesX() {
    const state = useContext(GlobalState);
    const [isProcumentStaff] = state.userAPI.isProcumentStaff;
    const [isManager] = state.userAPI.isManager;
    const [isSupplier]= state.userAPI.isSupplier;
    return (
        <div className="pages" style={{flex: 4}}>
            <Switch>
            <Route path="/home" exact component={isManager ? MHome : isProcumentStaff ? PHome : isSupplier? SHome : NotFound}/>
            <Route path="/staff-home" exact component={PHome} />
            <Route path="/supplier-home" exact component={SHome} />
    
            </Switch>
        </div>
    )
}

export default PagesX
