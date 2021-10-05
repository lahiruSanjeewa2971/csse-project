import React, {useContext} from 'react'
import {Home} from '@material-ui/icons';
import {CardTravelOutlined} from '@material-ui/icons';
import {ListAltOutlined, PeopleAltOutlined, NoteAddOutlined, DescriptionOutlined} from '@material-ui/icons';
import {Link} from 'react-router-dom'
import { GlobalState } from '../../GlobalState';
import './Sidebar.css'

function Sidebar() {
    const state = useContext(GlobalState);
    const [isLogged] = state.userAPI.isLogged;
    const [isProcumentStaff] = state.userAPI.isProcumentStaff;
    const [isManager] = state.userAPI.isManager;
    const [isSupplier]= state.userAPI.isSupplier;
    const [isSiteManager]= state.userAPI.isSitemanager;
    const [token] = state.token;


    const managerRouter = () =>{
        return(
           
        
        <div className="sidebarWrappper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <Link to ="/dashboard_manager" style={{textDecoration:"none", color:"white"}}>
                        <Home className="sidebarIcon"/>
                            Home
                        </Link>
                    </li>
                </ul>
                <h3 className="sidebarTitle">HRM</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/add_employee_manager" style={{textDecoration:"none", color:"white"}}>
                        <CardTravelOutlined className="sidebarIcon"/>
                            Add Employee
                    </Link>
                    </li>
                    <li className="sidebarListItem">
                    <Link to ="/manage_employee_manager" style={{textDecoration:"none", color:"white"}}>
                        <CardTravelOutlined className="sidebarIcon"/>
                            Manage Employee
                 </Link>
                    </li>
                </ul>
                {/**create-site_manager */}
                <h3 className="sidebarTitle">Sites</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/create-site_manager" style={{textDecoration:"none", color:"white"}}>
                        <CardTravelOutlined className="sidebarIcon"/>
                            Create New Site
                    </Link>
                    </li>
                    <li className="sidebarListItem">
                    <Link to ="/maange-site_manager" style={{textDecoration:"none", color:"white"}}>
                        <CardTravelOutlined className="sidebarIcon"/>
                            Manage Sites
                    </Link>
                    </li>
                </ul>

                <h3 className="sidebarTitle">Policy</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/create-Policy_manager" style={{textDecoration:"none", color:"white"}}>
                        <CardTravelOutlined className="sidebarIcon"/>
                            Policy
                    </Link>
                    </li>
                    <li className="sidebarListItem">
                    <Link to ="/create-Policy_manager" style={{textDecoration:"none", color:"white"}}>
                        <CardTravelOutlined className="sidebarIcon"/>
                            Manage Policy
                    </Link>
                    </li>
                </ul>

                
            </div>
        </div>

        )
    }

    const procumentStaffRouter = () =>{
        return(
           
      
        <div className="sidebarWrappper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <Link to ="/psa-dashboard" style={{textDecoration:"none", color:"white"}}>
                        <Home className="sidebarIcon"/>
                            Home
                        </Link>
                    </li>
                </ul>
                <h3 className="sidebarTitle">Orders</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/view-orders" style={{textDecoration:"none", color:"white"}}>
                        <CardTravelOutlined className="sidebarIcon"/>
                            View Orders
                    </Link>
                    </li>
                    {/* <li className="sidebarListItem">
                    <Link to ="/orders-list" style={{textDecoration:"none", color:"white"}}>
                        <CardTravelOutlined className="sidebarIcon"/>
                            
                 </Link>
                    </li> */}
                   
                </ul>
                <h3 className="sidebarTitle">Reports</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/acount-details" style={{textDecoration:"none", color:"white"}}>
                        <ListAltOutlined className="sidebarIcon"/>
                             Account Details
                    </Link>
                    </li>
                    
                </ul>
                
                 
            </div>
        </div>
   
        )
    }
    const siteManagerRouter = () =>{
        return (
            <div className="sidebarWrappper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <Link to ="/viewHome" style={{textDecoration:"none", color:"white"}}>
                        <Home className="sidebarIcon"/>
                            Home
                        </Link>
                    </li>
                </ul>
                <h3 className="sidebarTitle">Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/menu" style={{textDecoration:"none", color:"white"}}>
                        <CardTravelOutlined className="sidebarIcon"/>
                            Menu
                    </Link>
                    </li>
                </ul>
                <h3 className="sidebarTitle">Contact us</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/map" style={{textDecoration:"none", color:"white"}}>
                        <PeopleAltOutlined className="sidebarIcon"/>
                            Contact
                    </Link>
                    </li>
                </ul>
                <h3 className="sidebarTitle">About</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/messages" style={{textDecoration:"none", color:"white"}}>
                        <NoteAddOutlined className="sidebarIcon"/>
                            About Us
                    </Link>
                    </li>
                    
                </ul>
                <h3 className="sidebarTitle">Display User</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/display" style={{textDecoration:"none", color:"white"}}>
                        <NoteAddOutlined className="sidebarIcon"/>
                            About Us
                    </Link>
                    </li>
                    
                </ul>
            </div>
        </div>
        )
    }
    const supplierRouter = () =>{
        return(
            
            <div className="sidebarWrappper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Link to ="/home" style={{textDecoration:"none", color:"white"}}>
                            <Home className="sidebarIcon"/>
                                Home
                            </Link>
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Orders</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <Link to ="/orders-list" style={{textDecoration:"none", color:"white"}}>
                            <CardTravelOutlined className="sidebarIcon"/>
                                OrdersList
                        </Link>
                        </li>
                        <li className="sidebarListItem">
                        <Link to ="/payments-list" style={{textDecoration:"none", color:"white"}}>
                            <CardTravelOutlined className="sidebarIcon"/>
                                Payments
                     </Link>
                        </li>
                       
                    </ul>
                    <h3 className="sidebarTitle">Vehicles</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <Link to ="/add_new_vehicle" style={{textDecoration:"none", color:"white"}}> 
                            <ListAltOutlined className="sidebarIcon"/>
                                 Add Vehicles
                         </Link>
                        </li>
                        <li className="sidebarListItem">
                        <Link to ="/vehicles" style={{textDecoration:"none", color:"white"}}> 
                            <ListAltOutlined className="sidebarIcon"/>
                                 Manage Vehicles
                         </Link>
                        </li>
                        
                    </ul>
                    <h3 className="sidebarTitle">Items</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <Link to ="/customers-list" style={{textDecoration:"none", color:"white"}}>
                            <PeopleAltOutlined className="sidebarIcon"/>
                                Add Items
                        </Link>
                        </li>

                        <li className="sidebarListItem">
                        <Link to ="/customers-list" style={{textDecoration:"none", color:"white"}}>
                            <PeopleAltOutlined className="sidebarIcon"/>
                                Manage Items
                        </Link>
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Reports</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <Link to ="/create-report" style={{textDecoration:"none", color:"white"}}>
                            <NoteAddOutlined className="sidebarIcon"/>
                                New Report
                        </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to ="/saved-reports" style={{textDecoration:"none", color:"white"}}>
                                <DescriptionOutlined className="sidebarIcon"/>
                                    Saved Reports
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to ="/submitted-reports" style={{textDecoration:"none", color:"white"}}>
                            <DescriptionOutlined className="sidebarIcon"/>
                                Submitted Reports
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            
     
        )
    }
    return (
       
        <div className="sidebar">
             {isManager && isLogged && managerRouter()}
             {isSupplier &&  isLogged && supplierRouter()}
             {isProcumentStaff && isLogged && procumentStaffRouter()}
             {isSiteManager && isLogged && siteManagerRouter()}
           
         </div>
   

     
    )
}

export default Sidebar
