import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { DataContext } from '../../context/AppData';

const AddSRform = () => {

    const { estimateItems } = useContext(DataContext);

    const [itemObj, setItemObj] = useState(estimateItems)
    const [itemName, setItemName] = useState();
    const [itemQty, setItemQty] = useState();
    const [itemDesc, setItemDesc] = useState();
    const [rate, setRate] = useState();

    const addItem = () => {
        const updatedArr = [
            ...itemObj, {
                id: `item${Math.round(Math.random() * 999)}`,
                name: itemName,
                qty: itemQty,
                description: itemDesc,
                rate: rate,
                tax: 'Non',
            }
        ]
        setItemObj(updatedArr)
        setItemName('');
        setItemQty('');
        setItemDesc('');
        setRate('')
    }

    const renderItems = itemObj.map((item) => {
        return (
            <tr>
                <td><span>{item.qty}</span></td>
                <td>
                    <div className="products">
                        <div>
                            <h6>{item.name}</h6>
                        </div>
                    </div>
                </td>
                <td><span>{item.description}</span></td>
                <td><span className="text-primary">${item.rate}</span></td>
                <td>
                    <span>${item.rate}</span>
                </td>
                <td>
                    <span>{item.tax}</span>
                </td>
                <td>
                    <input type='checkbox' checked />
                </td>
            </tr>
        )
    })

    return (

        <div className="card-body">
            <div class="row mb-3">
                <div className="col-lg-2 col-md-12 mb-2">
                    <Form.Select aria-label="Default select example" className='bg-white' size="md">
                        <option value='Draft'>Draft</option>
                        <option value='Sent'>Sent</option>
                        <option value='Approved'>Approved</option>
                        <option value='Rejected'>Rejected</option>
                    </Form.Select>
                    {/* <select className="default-select  form-control wide"  >
                        <option value='Draft'>Draft</option>
                        <option value='Sent'>Sent</option>
                        <option value='Approved'>Approved</option>
                        <option value='Rejected'>Rejected</option>
                    </select> */}
                </div>
                <div className="col-lg-4 col-md-12">
                    <button type="button" className="col-lg-3 btn btn-sm btn-outline-primary">Email</button>
                    <button type="button" className="col-lg-3 btn btn-sm btn-outline-primary mx-2">Print</button>
                    <button type="button" className="col-lg-5 btn btn-sm btn-outline-primary">Download</button>
                </div>
            </div>
            <div className="card">
                <div className="card-body p-0">
                    <div className="itemtitleBar">
                        <h4>Service Request Details</h4>
                    </div>
                    <div className="basic-form">
                        <form className='SRdetailsForm'>
                            <div className="row" style={{ width: '80%' }}>
                                <div className=" col-md-6">
                                    <label className="form-label">Job Name:</label>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control" placeholder="Job Name" />
                                    </div>
                                </div>
                                <div className=" col-md-6">
                                    <label className="form-label">Due Date:</label>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control" placeholder="Due Date" />
                                    </div>
                                </div>
                                <div className="col-md-11 mt-3" style={{ alignItems: 'flex-start' }}>
                                    <label className="form-label">Notes:</label>
                                    <div className="col-md-12">
                                        <textarea className="form-txtarea form-control" rows="4" id="comment"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* modal */}
            <div className="modal fade" id="basicModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Item</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="basic-form">
                                <form>
                                    <div className="mb-3 row">
                                        <label className="col-sm-3 col-form-label">Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} className="form-control" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-3 col-form-label">Quantity</label>
                                        <div className="col-sm-9">
                                            <input type="number" value={itemQty} onChange={(e) => setItemQty(e.target.value)} className="form-control" placeholder="Quantity" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-3 col-form-label">Description</label>
                                        <div className="col-sm-9">
                                            <textarea className="form-txtarea form-control" value={itemDesc} onChange={(e) => setItemDesc(e.target.value)} rows="3" id="comment"></textarea>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-3 col-form-label">Rate</label>
                                        <div className="col-sm-9">
                                            <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="form-control" placeholder="Rate" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-3 col-form-label">Tax</label>
                                        <div className="col-sm-9">
                                            <Form.Select aria-label="Default select example" className='bg-white' size="md">
                                                <option>Non (Non - Taxable Sales)</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </Form.Select>
                                            {/* <select className="default-select  form-control wide" >
                                                <option>Non (Non - Taxable Sales)</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select> */}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-3 col-form-label">Item Total</label>
                                        <div className="col-sm-9" style={{ display: 'flex', alignItems: 'center' }}>
                                            <h5 style={{ margin: '0' }}>$100.00</h5>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={addItem} data-bs-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body p-0">
                    <div className="estDataBox">
                        <div className="itemtitleBar">
                            <h4>Items</h4>
                        </div>
                        <a className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#basicModal" style={{ margin: '12px 20px' }}>+ Add Items</a>
                        <div className="table-responsive active-projects style-1">
                            <table id="empoloyees-tblwrapper" className="table">
                                <thead>
                                    <tr>
                                        <th>Qty / Duration</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Rate</th>
                                        <th>Amount</th>
                                        <th>Tax</th>
                                        <th>Approved</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderItems}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body p-0">
                    <div className="estDataBox">
                        <div className="itemtitleBar">
                            <h4>Assign & Schedule</h4>
                        </div>
                        <div className="basic-form">
                            <form className='SRdetailsForm'>
                                <div className="SRfields col-md-10">
                                    <label className="form-label">Assign / Apointment :</label>
                                    <div className="col-md-7">
                                        <Form.Select aria-label="Default select example" className='bg-white' size="md">
                                            <option selected>Choose...</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </Form.Select>
                                        {/* <select id="inputState" className="default-select form-control wide">
                                            <option selected>Choose...</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </select> */}
                                    </div>
                                    <div className="col-md-2 flex-box">
                                        <button type="button" class="btn btn-outline-dark btn-md scheduleBTN">Schedule</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body p-0">
                    <div className="estDataBox">
                        <div className="itemtitleBar">
                            <h4>Sites</h4>
                        </div>
                        <a className="btn btn-primary btn-sm" style={{ margin: '12px 20px' }}>+ Add</a>
                        <div className="table-responsive active-projects style-1">
                            <table id="empoloyees-tblwrapper" className="table">
                                <thead>
                                    <tr>
                                        <th>Barcode ID</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span>1001</span></td>
                                        <td>
                                            <div className="products">
                                                <div>
                                                    <h6>Liam Antony</h6>

                                                </div>
                                            </div>
                                        </td>
                                        <td><span>Computer Science</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>1001</span></td>
                                        <td>
                                            <div className="products">
                                                <div>
                                                    <h6>Noah Oliver</h6>

                                                </div>
                                            </div>
                                        </td>
                                        <td><span>Computer Science</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>1001</span></td>
                                        <td>
                                            <div className="products">
                                                <div>
                                                    <h6>Elijah James</h6>

                                                </div>
                                            </div>
                                        </td>
                                        <td><span>Computer Science</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>1001</span></td>
                                        <td>
                                            <div className="products">
                                                <div>
                                                    <h6>Liam Antony</h6>

                                                </div>
                                            </div>
                                        </td>
                                        <td><span>Computer Science</span></td>
                                    </tr>


                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSRform
