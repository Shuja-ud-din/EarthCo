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

    console.log(customers);


    const renderedCustomers = customers.map((customer) => {
        return <CustomerTR key={customer._id} customer={customer} contact={customer.contacts[0]} />
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
                                                <div className="form-check custom-checkbox ms-2">
                                                    <input type="checkbox" className="form-check-input" id="customCheckBox2" required="" />
                                                    <label className="form-check-label" htmlFor="customCheckBox2"></label>
                                                </div>
                                            </th>
                                            <th>Customer Name </th>
                                            <th>Contact Name</th>
                                            <th>Contact Company </th>
                                            <th>Contact E-mail</th>
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

        </div>
    )
}

export default CustomersTable
