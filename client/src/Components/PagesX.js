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

//PSA Routers
import OrdersView from './ProcumentStaff/Orders/OrdersView'
import OrderItems from './ProcumentStaff/Orders/OrderItems'

import {GlobalState} from '../GlobalState';
import ViewOrders from './SupplierComponents/Orders/ManageOrders/ViewOrders';
import AddVehicles from './SupplierComponents/Vehicles/AddVehicles/AddVehicles';
import SiteHome from './SiteManager/Dashboard/SiteHome';
import ViewOrder from './SupplierComponents/Orders/ManageOrders/ViewSingleOrder/ViewOrder';
import VehicleList from './SupplierComponents/Vehicles/VehicleList/VehicleList';

function PagesX() {
    const state = useContext(GlobalState);
    const [isProcumentStaff] = state.userAPI.isProcumentStaff;
    const [isManager] = state.userAPI.isManager;
    const [isSupplier]= state.userAPI.isSupplier;
    const [isSiteManager]= state.userAPI.isSitemanager;
    return (
        <div className="pages" style={{flex: 4}}>
            <Switch>

                <Route path="/home" exact component={isManager ? MHome : isProcumentStaff ? PHome : isSupplier? SHome : isSiteManager? SiteHome : NotFound}/>
                <Route path="/staff-home" exact component={PHome} />

                <Route path="/home" exact component={isManager ? MHome : isProcumentStaff ? PHome : isSupplier? SHome : NotFound}/>
                <Route path="/psa-dashboard" exact component={PHome} />

                <Route path="/supplier-home" exact component={SHome} />
        
                <Route path="/add_employee_manager" exact component={AddEmployee} />
                <Route path="/manage_employee_manager" exact component={ManageEmployees} />
                <Route path="/create-site_manager" exact component={CreateSite} />
                <Route path="/maange-site_manager" exact component={ManageSites} />
                <Route path="/create-Policy_manager" exact component={NewPolicy} />


                <Route path="/view-orders" exact component={OrdersView} />
                <Route path="/neworder/:id" exact component={OrderItems} />

                <Route path="/orders-list" exact component={ViewOrders} />
                <Route path="/view-order/:id" exact component={ViewOrder}></Route>
                 <Route path="/add_new_vehicle" exact component={AddVehicles} />
                 <Route path="/vehicles" exact component={VehicleList} />
                 

            </Switch>
        </div>
    )
}

export default PagesX
