import React from 'react'
import StatusActions from '../StatusActions'

const AddEstimateForm = () => {
    return (
        <div class="card">
            <div className="card-body" >
                <div className="row">
                    <div className="basic-form col-md-6">
                        <div className="row">
                            <div className="col-md-8 mb-3">
                                <div className="row statusRow">
                                    <StatusActions />
                                </div>
                            </div>
                        </div>
                        <form>
                            <div className="row">
                                <div className="mb-3 col-md-9">
                                    <select id="inputState" className="default-select form-control wide">
                                        <option selected>Choose...</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-md-9">
                                    <input type="text" className="form-control" placeholder="Customer" />
                                </div>
                                <div className="mb-3 col-md-9">
                                    <input type="text" className="form-control" placeholder="Service Location" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="basic-form col-md-6">
                        <form>
                            <div className="row" style={{ display: 'flex', justifyContent: 'end' }}>
                                <div className="mb-3 col-md-9">
                                    <label className="form-label">Estimate No.</label>
                                    <input type="text" className="form-control" placeholder="Estimate No." />
                                </div>
                                <div className="mb-3 col-md-9">
                                    <label className="form-label">Issued Date</label>
                                    <input className="form-control input-limit-datepicker" placeholder='Issued Date' type="text" name="daterange" value="06/01/2015" />
                                </div>
                            </div>
                        </form>
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
                                                <input type="text" className="form-control" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Quantity</label>
                                            <div className="col-sm-9">
                                                <input type="number" className="form-control" placeholder="Quantity" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Description</label>
                                            <div className="col-sm-9">
                                                <textarea className="form-txtarea form-control" rows="3" id="comment"></textarea>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Rate</label>
                                            <div className="col-sm-9">
                                                <input type="number" className="form-control" placeholder="Rate" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Tax</label>
                                            <div className="col-sm-9">
                                                <select className="default-select  form-control wide" >
                                                    <option>Non (Non - Taxable Sales)</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
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
                                <button type="button" className="btn btn-primary">Save</button>
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
                                            <td><span className="text-primary">abc@gmail.com</span></td>
                                            <td>
                                                <span>+91 123 456 7890</span>
                                            </td>
                                            <td>
                                                <span>Male</span>
                                            </td>
                                            <td>
                                                <span className="badge badge-success light border-0">Active</span>
                                            </td>
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
                                            <td><span className="text-primary">abc@gmail.com</span></td>
                                            <td>
                                                <span>+91 123 456 7890</span>
                                            </td>
                                            <td>
                                                <span>Male</span>
                                            </td>

                                            <td>
                                                <span className="badge badge-danger light border-0">Active</span>
                                            </td>
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
                                            <td><span className="text-primary">abc@gmail.com</span></td>
                                            <td>
                                                <span>+91 123 456 7890</span>
                                            </td>
                                            <td>
                                                <span>Male</span>
                                            </td>

                                            <td>
                                                <span className="badge badge-success light border-0">Active</span>
                                            </td>
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
                                            <td><span className="text-primary">abc@gmail.com</span></td>
                                            <td>
                                                <span>+91 123 456 7890</span>
                                            </td>
                                            <td>
                                                <span>Male</span>
                                            </td>
                                            <td>
                                                <span className="badge badge-success light border-0">Active</span>
                                            </td>
                                        </tr>


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
                                <h4>Files</h4>
                            </div>
                            <a className="btn btn-primary btn-sm" style={{ margin: '12px 20px' }}>+ Add</a>
                            <div className="table-responsive active-projects style-1">
                                <table id="empoloyees-tblwrapper" className="table">
                                    <thead>
                                        <tr>
                                            <th>File Name</th>
                                            <th>Caption</th>
                                            <th>Date</th>
                                            <th>Share</th>
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
                                            <td><span className="text-primary">abc@gmail.com</span></td>
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
                                            <td><span className="text-primary">abc@gmail.com</span></td>

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
                                            <td><span className="text-primary">abc@gmail.com</span></td>

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
                                            <td><span className="text-primary">abc@gmail.com</span></td>

                                        </tr>


                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="estNotesBox">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12">
                                    <div className="basic-form">
                                        <form>
                                            <h4 className="card-title">Estimate Notes</h4>
                                            <div className="mb-3">
                                                <textarea className="form-txtarea form-control" rows="2" id="comment"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                    <div className="basic-form">
                                        <form>
                                            <h4 className="card-title">Service Location Notes</h4>
                                            <div className="mb-3">
                                                <textarea className="form-txtarea form-control" rows="2" id="comment"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                    <div className="basic-form">
                                        <form>
                                            <h4 className="card-title">Private Notes</h4>
                                            <div className="mb-3">
                                                <textarea className="form-txtarea form-control" rows="2" id="comment"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="card" style={{ marginTop: '15px' }}>
                                <div className="card-body">
                                    <div className="sutotalBox">
                                        <div className="basic-form">
                                            <form>
                                                <select className="default-select  form-control wide" >
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </form>
                                        </div>
                                        <div className="dataBox">
                                            <div className="dataRow">
                                                <h5>Subtotal:</h5>
                                                <p>10.00$</p>
                                            </div>
                                            <div className="dataRow">
                                                <h5>Tax:</h5>
                                                <p>0.00$</p>
                                            </div>
                                            <div className="dataRow">
                                                <h5>Total:</h5>
                                                <p>10.00$</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mb-2 row text-end">
                    <div>
                        <a href='#'><button type='button' class="btn btn-primary me-1">Submit</button></a>
                        <button class="btn btn-danger light ms-1">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEstimateForm
