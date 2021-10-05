import  NotFound  from './Utils/NotFound';
import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import MHome from '../Components/Manager/Dashboard/MHome';
import PHome from '../Components/ProcumentStaff/Dashboard/PHome';
import SHome from '../Components/Supplier/Dashboard/SHome';
import NewPolicy from './ManagerComponents/Policy/NewPolicies/NewPolicy';

//manager Router
import AddEmployee from './ManagerComponents/HRM/AddEmployee/AddEmployee';
import ManageEmployees from './ManagerComponents/HRM/ManageEmployee/ManageEmployees';
import CreateSite from './ManagerComponents/Sites/CreateSites/CreateSite';
import ManageSites from './ManagerComponents/Sites/ManageSites/ManageSites';

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
        
                <Route path="/add_employee_manager" exact component={AddEmployee} />
                <Route path="/manage_employee_manager" exact component={ManageEmployees} />
                <Route path="/create-site_manager" exact component={CreateSite} />
                <Route path="/maange-site_manager" exact component={ManageSites} />
                <Route path="/create-Policy_manager" exact component={NewPolicy} />

            </Switch>
        </div>
    )
}

export default PagesX
