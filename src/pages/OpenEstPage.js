import React, { useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/AppData'
import StaticComps from '../components/StaticComps';
import TitleBar from '../components/TitleBar';
import OpenedEstimate from '../components/Estimates/OpenedEstimate';
import Footer from '../components/Footer';

const OpenEstPage = () => {

    const icon = <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.8381 12.7317C16.4566 12.7317 16.9757 13.2422 16.8811 13.853C16.3263 17.4463 13.2502 20.1143 9.54009 20.1143C5.43536 20.1143 2.10834 16.7873 2.10834 12.6835C2.10834 9.30245 4.67693 6.15297 7.56878 5.44087C8.19018 5.28745 8.82702 5.72455 8.82702 6.36429C8.82702 10.6987 8.97272 11.8199 9.79579 12.4297C10.6189 13.0396 11.5867 12.7317 15.8381 12.7317Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M19.8848 9.1223C19.934 6.33756 16.5134 1.84879 12.345 1.92599C12.0208 1.93178 11.7612 2.20195 11.7468 2.5252C11.6416 4.81493 11.7834 7.78204 11.8626 9.12713C11.8867 9.5459 12.2157 9.87493 12.6335 9.89906C14.0162 9.97818 17.0914 10.0862 19.3483 9.74467C19.6552 9.69835 19.88 9.43204 19.8848 9.1223Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
    </svg>;

    const { singleObj, customers } = useContext(DataContext);
    const OneEstimate = singleObj[0];

    const [customer, setCustomer] = useState(OneEstimate.customerName);

    const customerChange = (event) => {
        setCustomer(event.target.value);
    }

    const singleCustomer = customers.filter((item) => {
        if (customer === item.name) {
            return item;
        }
    })[0];
    // const customerOptions = customers.map((customer) => {
    //     return <option key={customer.customerId} value={customer.name} >{customer.name}</option>
    // })

    return (
        <>
            <StaticComps />
            <div className="content-body" style={{ paddingBottom: '1px' }}>
                <TitleBar icon={icon} title={`Estimate #${OneEstimate.estimateID}`} />
                <div className="card-body">
                    <div className="basic-form">
                        <form>
                            <div className="row">
                                <div className="mb-3 col-md-4">
                                    <label className="form-label">Customer</label>
                                    <select class="me-sm-2 default-select form-control wide" value={OneEstimate.customerName} onChange={customerChange} id="inlineFormCustomSelect">
                                        <option value={OneEstimate.customerName}>{OneEstimate.customerName}</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-md-4">
                                    <label className="form-label">Service Location</label>
                                    <input type="text" className="form-control" placeholder="Service Location" />
                                </div>
                                <div className="mb-3 col-md-4">
                                    <label>Contact</label>
                                    <input type="text" className="form-control" placeholder="Contact" value={singleCustomer.email} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="add-item" style={{ margin: '20px', }}>
                    <OpenedEstimate oneEstimate={OneEstimate} customer={singleCustomer} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OpenEstPage
