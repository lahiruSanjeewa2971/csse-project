import React, {useState} from 'react'
import { Grid } from '@material-ui/core'
import axios from 'axios'

const styles = {
    outer: {
        borderRadius: 5,
        boxShadow: "0 10px 30px #BBB",
        padding: '40px 60px',
        width:'90%'
    },
};
const initialState = {
    name: '', 
    email: '', 
    password: '', 
    images: '', 
    designation: '', 
    phone: '', 
    gender: ''
}

function AddEmployee() {
    const [employee, setEmployee] = useState({
        name: '', 
        email: '', 
        password: '', 
        images: '', 
        designation: '', 
        phone: '', 
        gender: ''        
    })

    const onChangeInput = e => {
        const {name, value} = e.target;
        setEmployee({...employee, [name]:value})
    }

    return (
        <div>
            <div style={styles.outer} className="form_emp">
                <form >
                    <h2 style={{fontSize:'30px', fontFamily:'Herculanum'}} >Form</h2><br/>
                        <Grid container spacing={2} direction="row" className="addEmpForm" style={{textAlign:'center', 
                            paddingTop: '20px'}}>
                            <Grid item sm={4} xs={12}>
                                <div>Full Name</div>
                                <input type="text" placeholder="Full Name" name="name" 
                                    required  />
                            </Grid>

                            <Grid item sm={4} xs={12}>
                                <div>Email Address</div>
                                <input type="email" placeholder="Email" name="email" 
                                    required />
                            </Grid>

                            <Grid item sm={4} xs={12}>
                                <div>Password</div>
                                <input type="password" placeholder="password" name="password" 
                                    required  />
                            </Grid>

                            <Grid item sm={4} xs={12}>
                                <div>Designation</div>
                                <select name="designation" >
                                    <option value="">Select...</option>
                                    <option value="cashier">Site Manager</option>
                                    <option value="kitchen manager">procurement manager</option>
                                    <option value="supplier">Supplier</option>
                                </select>
                            </Grid>
                            
                            <Grid item sm={4} xs={12}>
                                <div>Phone</div>
                                <input type="number" placeholder="Phone" name="phone" 
                                    required />
                            </Grid>
                            
                            <Grid item sm={4} xs={12}>
                                <div>Gender</div>
                                <select name="gender" >
                                    <option value="">Select Gender...</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </Grid>
                            
                            <Grid item sm={4} xs={12}>
                                <button className="addEmp">Add Employee</button>    
                            </Grid>
                            
                        </Grid>
                    </form>
                </div>
        </div>
    )
}

export default AddEmployee
