import React from 'react'
import StaticComps from '../components/StaticComps'
import ServiceRequest from '../components/ServiceRequest/ServiceRequest'
import AddSRform from '../components/ServiceRequest/AddSRform'
import { useContext, useState } from 'react'
import TitleBar from '../components/TitleBar'
import { DataContext } from '../context/AppData'
import Footer from '../components/Footer'

const ServiceRequestPage = () => {
    const icon = <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.64111 13.5497L9.38482 9.9837L12.5145 12.4421L15.1995 8.97684" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="18.3291" cy="3.85021" rx="1.76201" ry="1.76201" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.6808 2.86012H7.01867C4.25818 2.86012 2.54651 4.81512 2.54651 7.57561V14.9845C2.54651 17.7449 4.22462 19.6915 7.01867 19.6915H14.9058C17.6663 19.6915 19.3779 17.7449 19.3779 14.9845V8.53213" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
    </svg>


    const { serviceRequests } = useContext(DataContext);



    const serviceRequest = serviceRequests[0];
    // const OneEstimate = singleObj[0];

    // const [customer, setCustomer] = useState(OneEstimate.customerName);

    // const customerChange = (event) => {
    //     setCustomer(event.target.value);
    // }

    // const singleCustomer = customers.filter((item) => {
    //     if (customer === item.name) {
    //         return item;
    //     }
    // })[0];
    return (
        <>
            <StaticComps />
            <div className="content-body">
                <TitleBar icon={icon} title={`Service Request #`} />
                <div className="card-body">
                    <div className="basic-form">
                        <form>
                            <div className="row">
                                <div className="mb-3 col-md-4">
                                    <label className="form-label">Customer</label>
                                    <select class="me-sm-2 default-select form-control wide" id="inlineFormCustomSelect">
                                        <option>{serviceRequest.customer}</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-md-4">
                                    <label className="form-label">Service Location</label>
                                    <select class="me-sm-2 default-select form-control wide" id="inlineFormCustomSelect">
                                        <option>Service Request 1</option>
                                        <option>Service Request 2</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-md-4">
                                    <label>Contact</label>
                                    <select class="me-sm-2 default-select form-control wide" id="inlineFormCustomSelect">
                                        <option>Contact 1</option>
                                        <option>Contact 2</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
                <div className="container-fluid">
                    {/* <div className="add-item" style={{ margin: '0px', }}>
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
                    </div> */}

                    <div className="card">
                        <div className="card-body " >
                            <AddSRform />
                            <div class="mb-2 row text-end">
                                <div>
                                    <a href='#'><button type='button' class="btn btn-primary me-1">Submit</button></a>
                                    <button class="btn btn-danger light ms-1">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default ServiceRequestPage
