import EstimateTR from './EstimateTR'
import './Estimates.css'
import { useContext, useEffect, useState } from 'react'
import StatusCardsEst from './StatusCardsEst'
import { DataContext } from '../../context/AppData'
import { RoutingContext } from '../../context/RoutesContext'
import { Form } from 'react-bootstrap'

const Estimates = () => {

    const { estimates, setSingleObj, customers } = useContext(DataContext);
    const { setEstimateRoute } = useContext(RoutingContext);

    const [customer, setCustomer] = useState('Select Customer');
    const [locations, setLocations] = useState();
    const [serviceLocation, setServiceLocation] = useState('Select Customer First');
    // const [locationOptions, setLocationOptions] = useState();

    const handleCatClick = (type, id) => {
        setEstimateRoute(type);
        const updatedArr = estimates.filter((object) => {
            if (id === object.estimateID) {
                return object;
            }
            return object
        });
        setSingleObj(updatedArr);
    }
    function getLocations() {
        const locationsArr = customers.filter((item) => {
            if (customer === item.name) {
                return item.name;
            }
            return item
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
    }, [customers, customer]);

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

    // setLocationArr(updatedArr[0]);



    const saveAddEstPop = () => {

    }

    const customerOptions = customers.map((item) => {
        return <option key={item.customerId} value={item.name}>{item.name}</option>
    })


    const renderedRecords = estimates.map((object) => {
        return <EstimateTR key={object.estimateID} onClick={() => handleCatClick(`Estimate${object.estimateID}`, object.estimateID)} estimate={object} />
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <StatusCardsEst drafts={28102} sent={7089} approved={4576} rejected={145} total={39912} />
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="tbl-caption">
                                <div className="row p-3 ">
                                    <div className="col-md-3">
                                        <a href='/' className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal" onClick={openModal}>+ Add Estimates</a>
                                    </div>
                                    <div className="col-md-7">
                                        <div>
                                            <input class="from-control form-control-sm" style={{ width: '100%' }} type="text" placeholder="Default input" />
                                        </div>
                                    </div>
                                    <div class="col-md-2" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                        <div className="col-md-12">
                                            <Form.Select aria-label="Default select example" size="md">
                                                <option>All</option>
                                                <option value="1">Current Month</option>
                                                <option value="2">Previous Month</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive active-projects style-1">
                                <table id="empoloyees-tblwrapper" className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="form-check custom-checkbox ms-2">
                                                    <input type="checkbox" className="form-check-input" id="customCheckBox2" required="" />
                                                    <label className="form-check-label" htmlFor="customCheckBox2"></label>
                                                </div>
                                            </th>
                                            <th>Customer Name</th>
                                            <th>Assign to</th>
                                            <th>Estimate Number</th>
                                            <th>Estimate Amount</th>
                                            <th>Description of Work </th>
                                            <th>Date Created</th>
                                            <th>Status</th>
                                            <th>QB Status</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderedRecords}
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
                            <h5 className="modal-title">Add Estimate</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                            </button>
                        </div>
                        <form onSubmit={saveAddEstPop}>
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
                                        <label className="col-sm-3 col-form-label">Quantity</label>
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

export default Estimates
