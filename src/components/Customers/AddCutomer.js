import React, { useContext, useState } from 'react'
import AdressModal from '../AdressModal';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { DataContext } from '../../context/AppData';

const AddCutomer = () => {

    const { customerAdress, setCustomerAdress } = useContext(DataContext)

    const [contacts, setContacts] = useState([]);
    const [serviceLocation, setServiceLocation] = useState([]);

    const [adress, setAdress] = useState('')

    const [contactName, setContactName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [mobile, setMobile] = useState();
    const [showPop1, setShowPop1] = useState(true);
    const [showPop2, setShowPop2] = useState(true);

    const [SLname, setSLname] = useState();
    const [SLadress, setSLadress] = useState();
    const [SLphone, setSLphone] = useState();
    const [SLfax, setSLfax] = useState();

    const addContact = (e) => {
        e.preventDefault();
        const updatedArr = [
            ...contacts,
            {
                name: contactName,
                eMail: email,
                Phone: phone,
                Mob: mobile
            }
        ]
        setContacts(updatedArr);

        setContactName('');
        setEmail('');
        setMobile('');
        setPhone('');
    }

    const addServiceLocation = (e) => {
        e.preventDefault();
        const updatedArr = [
            ...serviceLocation,
            {
                name: SLname,
                adress: SLadress,
                Phone: SLphone,
                fax: SLfax
            }
        ]
        setServiceLocation(updatedArr);
        setSLname('')
        setSLadress('')
        setSLphone('')
        setSLfax('')
    }

    const postCustomer = async () => {
        console.log(adress);
        const response = await axios.post('http://localhost:8001/AddCustomer', {
            adress
        })
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     showPop2(true)
    // }

    // const closePop = (boolState) => {
    //     // boolState(true);
    //     console.log('hell');
    // }


    return (

        <div className="container-fluid">
            <div class="card">
                <div class="card-header">
                    <h4 className="modal-title" id="#gridSystemModal">Customer Info</h4>
                </div>
                <div class="card-body">
                    {/* <form> */}
                    <div className="row">
                        <div className="col-xl-6 mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Customer Name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" name='customerName' id="exampleFormControlInput1" placeholder="Customer Name" />
                        </div>
                        {/* <div className="col-xl-6 mb-3">
                            <label htmlFor="exampleFormControlInput2" className="form-label">Last Name<span className="text-danger">*</span></label>
                            <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Last Name" />
                        </div> */}
                        <div className="col-xl-6 mb-3">
                            <label htmlFor="exampleFormControlInput4" className="form-label">Title<span className="text-danger">*</span></label>
                            <input type="text" className="form-control" name='title' id="exampleFormControlInput4" placeholder="Title" />
                        </div>
                        <div className="col-xl-6 mb-3">
                            <label className="form-label">Company Name<span className="text-danger">*</span></label>
                            <input type="text" className="form-control" name='companyName' id="exampleFormControlInput3" placeholder="Company Name" />
                        </div>
                        <div className="col-xl-6" style={{ position: 'relative' }}>
                            <label className="form-label">Adress<span className="text-danger">*</span></label>
                            <input type="text" value={adress} onClick={() => { setShowPop1(!showPop1) }} style={{ cursor: 'pointer' }} className="form-control" id="exampleFormControlInput3" placeholder="Adress" readOnly />
                            {showPop1 || <AdressModal adress={customerAdress} setAdress={setCustomerAdress} boolState={setShowPop1} handleAdress={setAdress} />}
                        </div>
                        <div className="col-xl-6 ">
                            <label className="form-label">Description<span className="text-danger">*</span></label>
                            <textarea class="form-txtarea form-control" rows="4" id="comment"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <form onSubmit={addContact}>
                <div class="card">
                    <div class="card-header">
                        <h4 className="modal-title" id="#gridSystemModal">Contact</h4>
                    </div>
                    <div class="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Contact Name<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" value={contactName} onChange={(e) => setContactName(e.target.value)} placeholder="Contact Name" required />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Email<span className="text-danger">*</span></label>
                                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Phone<span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Mobile<span className="text-danger">*</span></label>
                                        <input type="number" className="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile" required />
                                    </div>
                                    <div className="col-xl-4 mb-3" style={{ display: 'flex', alignItems: 'center', paddingTop: '26px' }}>
                                        <button className="btn btn-primary">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body p-0">
                                    <div className="estDataBox">
                                        <div className="itemtitleBar">
                                            <h4>Contacts</h4>
                                        </div>
                                        <div className="table-responsive active-projects style-1">
                                            <table id="empoloyees-tblwrapper" className="table">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>Contact Name</th>
                                                        <th>E-mail</th>
                                                        <th>Phone</th>
                                                        <th>Mobile</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {contacts.map((contact) => {
                                                        return (
                                                            <>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>{contact.name}</td>
                                                                    <td>{contact.eMail}</td>
                                                                    <td>{contact.Phone}</td>
                                                                    <td>{contact.Mob}</td>
                                                                </tr>
                                                            </>
                                                        )
                                                    })}
                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <form onSubmit={addServiceLocation}>
                <div class="card">
                    <div class="card-header">
                        <h4 className="modal-title" id="#gridSystemModal">Service Locations</h4>
                    </div>
                    <div class="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Name<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" value={SLname} onChange={(e) => setSLname(e.target.value)} placeholder="Name" required />
                                    </div>
                                    <div className="col-xl-4 mb-3" style={{ position: 'relative' }}>
                                        <label className="form-label">Adress<span className="text-danger">*</span></label>
                                        <input type="text" onClick={() => { setShowPop2(!showPop2) }} style={{ cursor: 'pointer' }} className="form-control" id="exampleFormControlInput3" placeholder="Adress" readOnly />
                                        {showPop2 || <AdressModal boolState={setShowPop2} handleAdress={setAdress} />}

                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Phone<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" value={SLphone} onChange={(e) => setSLphone(e.target.value)} placeholder="Phone" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Customer Fax<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" value={SLfax} onChange={(e) => setSLfax(e.target.value)} placeholder="Fax" required />
                                    </div>
                                    <div className="col-xl-4 mb-3" style={{ display: 'flex', alignItems: 'center', paddingTop: '26px' }}>
                                        <button className="btn btn-primary">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body p-0">
                                    <div className="estDataBox">
                                        <div className="itemtitleBar">
                                            <h4>Service Locations</h4>
                                        </div>
                                        <div className="table-responsive active-projects style-1">
                                            <table id="empoloyees-tblwrapper" className="table">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>Name</th>
                                                        <th>Address</th>
                                                        <th>Phone</th>
                                                        <th>Customer Fax</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {serviceLocation.map((contact) => {
                                                        return (
                                                            <>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>{contact.name}</td>
                                                                    <td>{contact.adress}</td>
                                                                    <td>{contact.Phone}</td>
                                                                    <td>{contact.fax}</td>
                                                                </tr>
                                                            </>
                                                        )
                                                    })}
                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>


            <div className='text-end'>
                {/* <NavLink to='/Dashboard/Customers'> */}
                <button className="btn btn-primary me-1" onClick={postCustomer}>Submit</button>
                {/* </NavLink> */}
            </div>
            {/* </form > */}
        </div >
    )
}

export default AddCutomer
