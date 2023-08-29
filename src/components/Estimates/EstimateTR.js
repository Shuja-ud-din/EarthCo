import React from 'react'
import { NavLink } from 'react-router-dom';

const EstimateTR = ({ estimate, onClick, index }) => {

    const handleRouteChange = () => {
        onClick();
    }

    return (
        <NavLink to={`/Dashboard/Estimates/Estimate${estimate.estimateID}`} style={{ display: 'contents' }}>
            <tr onClick={handleRouteChange}>
                <td>
                    {index + 1}
                </td>
                <td>
                    <div className="products">
                        <div>
                            <h6>{estimate.customerName}</h6>
                        </div>
                    </div>
                </td>
                <td>
                    <h6>{estimate.customerName}</h6>
                </td> <td><span>{estimate.estimateID}</span></td>

                <td><span>${estimate.approvedTotal}</span></td>
                <td>
                    <span><p>{estimate.SRstatus} : {estimate.serviceRequest}{estimate.estimateID}</p></span>
                </td>
                <td>
                    <span className="badge badge-success light border-0">{estimate.status}</span>
                </td>
                <td><span>{estimate.issuedDate}</span></td>
                <td>
                    <span>{estimate.QBstatus}</span>
                </td>
            </tr>
        </NavLink>
    )
}

export default EstimateTR
