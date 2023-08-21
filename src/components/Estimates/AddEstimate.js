import React, { useContext } from 'react'
import './Estimates.css'
import AddEstimateForm from './AddEstimateForm'

const AddEstimate = () => {

    return (
        <>
            <div className="card-body">
                <div className="basic-form">
                    <form>
                        <div className="row">
                            <div className="mb-3 col-md-4">
                                <label className="form-label">Customer</label>
                                <input type="text" className="form-control" placeholder="Customer" />
                            </div>
                            <div className="mb-3 col-md-4">
                                <label className="form-label">Service Location</label>
                                <input type="text" className="form-control" placeholder="Service Location" />
                            </div>
                            <div className="mb-3 col-md-4">
                                <label>Contact</label>
                                <input type="text" className="form-control" placeholder="Contact" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="add-item" style={{ margin: '20px', }}>
                <div className="tabSwitch">
                    <button type="button" className="btn btn-secondary btn-sm" style={{ borderRadius: '5px 0 0 0' }}>
                        Estimate
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm" style={{ borderRadius: '0 0 0 0' }}>
                        + Add Service Request
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm" style={{ borderRadius: '0px 0 0 0' }}>
                        + Add Invoice
                    </button>
                </div>
                <AddEstimateForm />
                
            </div>
        </>
    )
}

export default AddEstimate
