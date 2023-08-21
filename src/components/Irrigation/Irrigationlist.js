import React from 'react'
import { NavLink } from 'react-router-dom';

const Irrigationlist = () => {


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Irrigation</h4>
                                    <div>
                                        <NavLink to='/Dashboard/Irrigation/Add-Irrigation'>
                                            <a href='/' className="btn btn-primary btn-sm" role="button">+ Add New</a>
                                        </NavLink>
                                    </div>
                                </div>
                                <table id="empoloyees-tblwrapper" className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="form-check custom-checkbox ms-2">
                                                    <input type="checkbox" className="form-check-input" id="customCheckBox2" required="" />
                                                    <label className="form-check-label" htmlFor="customCheckBox2"></label>
                                                </div>
                                            </th>
                                            <th>Customer Name </th>
                                            <th>Created Date </th>
                                            <th>Controller Number </th>
                                            <th>Report</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-check custom-checkbox ms-2">
                                                    <input type="checkbox" className="form-check-input" id="customCheckBox2" required="" />
                                                    <label className="form-check-label" htmlFor="customCheckBox2"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="products">
                                                    <div>
                                                        <h6>Promenade</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span>7/10/2023</span></td>
                                            <td>
                                                <span >Evolution DX2</span>
                                            </td>
                                            <td><NavLink to='/Dashboard/Irrigation/Audit-Report'>
                                                <span class="badge badge-primary light border-0 me-1">Open</span>
                                            </NavLink></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Irrigationlist
