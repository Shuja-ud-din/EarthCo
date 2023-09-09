import React from 'react'

const CustomerTR = ({ customer, contact }) => {
    return (
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
                        <h6>{customer.customerName}</h6>
                    </div>
                </div>
            </td>
            <td><span>{contact.contactName}</span></td>
            <td>
                <span >{customer.companyName}</span>
            </td>
            <td><span className="text-primary">{contact.email}</span></td>
        </tr>
    )
}

export default CustomerTR
