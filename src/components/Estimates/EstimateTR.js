import React from 'react'
import { useNavigate } from 'react-router-dom';

const EstimateTR = ({ estimate, onClick }) => {

    const navigate = useNavigate()

    const handleRouteChange = () => {
        onClick();
        navigate(`/Estimates/Estimate${estimate.estimateID}`)
    }

    return (
        // <NavLink to={`/Estimates/Estimate${estimate.estimateID}`} style={{ display: 'contents' }}>
        <tr onClick={handleRouteChange}>
            <td>
                <div className="form-check custom-checkbox ms-2">
                    <input type="checkbox" className="form-check-input" id="customCheckBox2" required="" />
                    <label className="form-check-label" htmlFor="customCheckBox2"></label>
                </div>
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
        // </NavLink>
    )
}

export default EstimateTR
