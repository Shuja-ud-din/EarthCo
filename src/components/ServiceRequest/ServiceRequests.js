import React from 'react'
import ServiceRequestTR from './ServiceRequestTR'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/AppData';
import { RoutingContext } from '../../context/RoutesContext';
import StatusCards from './StatusCards';
import { Form } from 'react-bootstrap';

const ServiceRequests = () => {
    const { serviceRequests, customers, setSingleSR } = useContext(DataContext);
    const { setSRroute } = useContext(RoutingContext)

    const [customer, setCustomer] = useState('Select Customer');
    const [locations, setLocations] = useState();
    const [serviceLocation, setServiceLocation] = useState('Select Customer First');
    // const [locationOptions, setLocationOptions] = useState();

    const handleCatClick = (type, id) => {
        setSRroute(type);
        const updatedArr = serviceRequests.filter((object) => {
            if (id === object.ID) {
                return object;
            }
            return object;
        });
        setSingleSR(updatedArr[0]);
    }
    function getLocations() {
        const locationsArr = customers.filter((item) => {
            if (customer === item.name) {
                return item.name;
            }
            return item;
        })[0];
        setLocations(locationsArr);
    }
    useEffect(() => {
        setLocations(customers.filter((item) => {
            if (customer === item.name) {
                return item.name;
            }
            return item;
        })[0]);
    }, [customer, customers]);

    let locationOptions;

    if (locations) {
        locationOptions = locations.serviceLocations.map((item) => {
            return <option key={item} value={item}>{item}</option>
        })
    }


    const openModal = () => {
        getLocations();
        // console.log(locations);
    }

    const handleChangeCustomer = (e) => {
        setCustomer(e.target.value);
        getLocations();
        // console.log(locations);
    }

    const customerOptions = customers.map((item) => {
        return <option key={item.customerId} value={item.name}>{item.name}</option>
    })


    const renderedRows = serviceRequests.map((item) => {
        return <ServiceRequestTR record={item} onClick={() => handleCatClick(`service-request${item.ID}`, item.ID)} />
    })
    return (
        <div className="container-fluid">
            <div className="row">
                <StatusCards newData={1178} open={5142} closed={71858} total={78178} />
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="tbl-caption">
                                <div className="row p-3 ">
                                    <div className="col-md-3">
                                        <a href='/' class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal" onClick={openModal}>+ Add Service Request</a>
                                    </div>
                                    <div className="col-md-7">
                                        <div>
                                            <input class="form-control" type="text" placeholder="Default input" />
                                        </div>
                                    </div>
                                    <div class="col-md-2" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <div className="col-md-12">
                                            <Form.Select aria-label="Default select example" size="md">
                                                <option selected>All</option>
                                                <option value="1">Current Month</option>
                                                <option value="2">Previous Month</option>
                                            </Form.Select>
                                            {/* <select class="default-select form-control wide" id="inlineFormCustomSelect">
                                                <option selected>All</option>
                                                <option value="1">Current Month</option>
                                                <option value="2">Previous Month</option>
                                            </select> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table id="example5" className="display table" style={{ minWidth: '845px' }}>
                                    <thead>
                                        <tr className='serviceRequestRecords'>
                                            <th>
                                                <div className="form-check custom-checkbox ms-2">
                                                    <input type="checkbox" className="form-check-input" id="customCheckBox2" required="" />
                                                    <label className="form-check-label" htmlFor="customCheckBox2"></label>
                                                </div>
                                            </th>

                                            <th>Customer Name </th>
                                            <th>Assigned to</th>
                                            <th>Service Request Number</th>

                                            <th>Status</th>
                                            <th>Work Requested</th>
                                            <th>Date Created</th>
                                            <th>Type</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderedRows}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal */}
            <div className="modal fade" id="basicModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Service Request</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                            </button>
                        </div>
                        <form>
                            <div className="modal-body">
                                <div className="basic-form">
                                    <div className="mb-3 row">
                                        <label className="col-sm-3 col-form-label">Customer</label>
                                        <div className="col-sm-9">
                                            <Form.Select aria-label="Default select example" size="md" value={customer} onChange={handleChangeCustomer} id="inlineFormCustomSelect">
                                                <option value='Select Customer'>Select Customer...</option>
                                                {customerOptions}
                                            </Form.Select>
                                            {/* <select class="me-sm-2 default-select form-control wide" value={customer} onChange={handleChangeCustomer} id="inlineFormCustomSelect">
                                                <option value='Select Customer'>Select Customer...</option>
                                                {customerOptions}
                                            </select> */}
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-3 col-form-label">Service Location</label>
                                        <div className="col-sm-9">
                                            <Form.Select aria-label="Default select example" size="md" value={serviceLocation} onChange={(e) => setServiceLocation(e.target.value)} id="inlineFormCustomSelect">
                                                <option value="Select Customer First">Select Customer First...</option>
                                                {locationOptions}
                                            </Form.Select>
                                            {/* <select class="me-sm-2 default-select form-control wide" value={serviceLocation} onChange={(e) => setServiceLocation(e.target.value)} id="inlineFormCustomSelect">
                                                <option value="Select Customer First">Select Customer First...</option>
                                                {locationOptions}
                                            </select> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceRequests
