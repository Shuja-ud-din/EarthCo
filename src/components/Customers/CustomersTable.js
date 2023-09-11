import React, { useEffect, useState } from 'react'
import CustomerTR from './CustomerTR';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CustomersTable = () => {

    const [customers, setCustomers] = useState([])

    const fetchCustomers = async () => {
        const response = await axios.get('http://localhost:8001/Customers');
        // console.log(response.data);
        setCustomers(response.data)
    }

    useEffect(() => {
        fetchCustomers();
    }, [])


    const renderedCustomers = customers.map((customer, index) => {
        return <CustomerTR key={customer._id} index={index} customer={customer} contact={customer.contacts[0]} />
    })
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Customers</h4>
                                    <div>
                                        <Link to='/Dashboard/Customers/Add-Customer'>
                                            <button className="btn btn-primary btn-sm" role="button">+ Add Customer</button>
                                        </Link>
                                    </div>
                                </div>
                                <table id="empoloyees-tblwrapper" className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                #
                                            </th>
                                            <th>Customer Name </th>
                                            <th>Contact Name</th>
                                            <th>Contact Company </th>
                                            <th>Contact E-mail</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderedCustomers}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* #modal */}

            {/* <div className="modal fade" id="deleteConfirm" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default CustomersTable
