import React, { useContext } from 'react'
import { GlobalState } from '../../../../GlobalState'
import { Link } from 'react-router-dom'
import '../../HRM/ManageEmployee/manageEmployee.css'

function ManageSites() {
    const state = useContext(GlobalState)
    const [siteList] = state.sitesList.sitesList

    return (
        <div>
            <div className="employee-view-table">
                <table>
                    <thead>
                        <tr>
                            <th>Site Name</th>
                            <th>Location</th>
                            <th>Description</th>
                            <th>Estimated Price</th>
                            <th>Site Manager Name</th>
                            <th>Status of the Site</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            siteList.map(single => (
                                <tr key={single._id}>
                                    <td>{single.siteName}</td>
                                    <td>{single.location}</td>
                                    <td>{single.description}</td>
                                    <td>{single.estimatePrice}</td>
                                    <td>{single.siteManager}</td>
                                    <td>{single.status}</td>
                                    <td>
                                        <Link to="#">Change Status</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageSites
