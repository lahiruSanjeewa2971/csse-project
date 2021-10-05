import React, { useContext } from 'react'
import { GlobalState } from '../../../../GlobalState'
import { Link } from 'react-router-dom'
import { Button, TableBody, TableCell, TableRow,Paper, TableHead , makeStyles, TableContainer, Table} from '@material-ui/core'
import '../../Orders/ManageOrders/ViewSingleOrder/ViewOrder.css'
import OrderFilter from '../OrderFilters/OrderFilter'

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
    }
}))



function ViewOrders() {
    const state = useContext(GlobalState)
    const [orderList] = state.orderList.orderList
    const [search, setSearch] = state.orderList.search
    const classes = useStyles();
    return (
        <div>
            <h2 className="titleOrders" style={{marginLeft: '45px'}}>Orders List</h2>
             
           <OrderFilter/>
            <div className="order-manage-page">
                <TableContainer component={Paper} className={classes.tableContainer} style={{boxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)',
                    WebkitBoxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)',
                    MozBoxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)'}}>
                <Table>
                    <TableHead>
                            <TableRow>
                                {/*<TableCell>Company Name</TableCell>*/}
                                <TableCell className={classes.tableHeaderCell}>Order ID</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Creater Name</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Description</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Ordered Date</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Number Of items</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Delivery Address</TableCell>
                                <TableCell className={classes.tableHeaderCell}>View Ordered Items</TableCell>
                            </TableRow>
                       
                    </TableHead>
                    <TableBody>
                        {
                            orderList.map(singleOrder => (
                                <TableRow key={singleOrder._id}>
                                    {/*<TableCell>{singleOrder.companyName}</TableCell>*/}
                                    <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>{singleOrder.orderID}</TableCell>
                                    <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>{singleOrder.createrName}</TableCell>
                                    <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>{singleOrder.description}</TableCell>
                                    <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>{singleOrder.date}</TableCell>
                                    <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>{singleOrder.quantity}</TableCell>
                                    <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>{singleOrder.deliveryAddress}</TableCell>
                                    <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>{<Button style={{ boxShadow: '2px 3px #888888', backgroundColor: '#1e2a78', height: '35px', width: '120px'}}><Link to={`/view-order/${singleOrder._id}`} style={{textDecoration: 'none', color: 'white', fontSize: '15px'}}>View Order</Link>
                                    </Button>}</TableCell>
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

export default ViewOrders
