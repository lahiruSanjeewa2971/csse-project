import React, { useContext } from 'react'
import { GlobalState } from '../../../../GlobalState'
import { Link } from 'react-router-dom'
import './manageEmployee.css'

function ManageEmployees() {
    const state = useContext(GlobalState)
    const [employees] = state.employeeList.employeeList
    //console.log(employee)

    return (
        <div>
            <div className="employee-view-table">
                <table>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Designation</th>
                            <th>Mobile Number</th>
                            <th>Gender</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(single => (
                                <tr key={single._id}>
                                    <td>{single.name}</td>
                                    <td>{single.email}</td>
                                    <td>{single.designation}</td>
                                    <td>{single.phone}</td>
                                    <td>{single.gender}</td>
                                    <td>{single.status}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageEmployees
