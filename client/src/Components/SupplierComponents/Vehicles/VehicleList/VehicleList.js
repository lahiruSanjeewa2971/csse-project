import React, { useContext } from 'react'
import { GlobalState } from '../../../../GlobalState'
import { Link } from 'react-router-dom'
import { Button, Typography, TableBody, TableCell, TableRow,Paper, TableHead , makeStyles, TableContainer, Table} from '@material-ui/core'


const useStyles = makeStyles((theme)=>({
    table:{
        minWidth: 1050,
        borderCollapse: 'collapse'
        
    },
    tableContainer: {
        marginTop: 30,
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 1000,
        marginLeft:50,

        
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        border: '1px solid #ddd',
        borderCollapse: 'collapse'
        
    },
    avatar:{
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.primary.dark
    },
    status: {
        fontweight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    },
    img:{
        width: 200,
        height: 150
    }
}))


function VehicleList() {
    const state = useContext(GlobalState)
    const [vehicleList] = state.vehicleList.vehicles
    const [search, setSearch] = state.vehicleList.search
    const classes = useStyles();
    return (
        <div>
        <h2 className="titleOrders" style={{marginLeft: '45px'}}>Vehicles</h2>
         
        <input style={{width: '500px', marginLeft: '23px', marginTop: '18px'}} type="text" value={search} placeholder="Enter creater name!" onChange={e => setSearch(e.target.value.toLowerCase())}/>
        <div className="order-manage-page">
            <TableContainer component={Paper} className={classes.tableContainer} style={{boxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)',
                WebkitBoxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)',
                MozBoxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)'}}>
            <Table>
                <TableHead>
                        <TableRow>
                            {/*<TableCell>Company Name</TableCell>*/}
                            <TableCell className={classes.tableHeaderCell}></TableCell>
                            <TableCell className={classes.tableHeaderCell}>Vehicle ID</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Vehicle Name</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Owner</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Contact</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Location</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Status</TableCell>

                        </TableRow>
                   
                </TableHead>
                <TableBody>
                    {
                        vehicleList.map(vehicle => (
                            <TableRow key={vehicle._id}>
                                {/*<TableCell>{vehicle.companyName}</TableCell>*/}
                                <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}><img src={vehicle.images.url} alt=""  className={classes.img}/></TableCell>
                                <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>{vehicle.vehicleID}</TableCell>
                                <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>{vehicle.vehicleName}</TableCell>
                                <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>{vehicle.ownerName}</TableCell>
                                <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>{vehicle.ownerMobile}</TableCell>
                                <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>{vehicle.location}</TableCell>
                                <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>
                                    <Typography
                                        id="status"
                                            className={classes.status}
                                            style={{
                                                backgroundColor:
                                                ((vehicle.status === 'Available' && 'green') ||
                                                (vehicle.status === 'In Progress' && 'orange') ||
                                                (vehicle.status === 'New' && 'blue') ||
                                                (vehicle.status === 'Cancel' && 'red'))
                                            }}>{vehicle.status}
                                            
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            </TableContainer>
        
        </div>
    </div>
    )
}

export default VehicleList
