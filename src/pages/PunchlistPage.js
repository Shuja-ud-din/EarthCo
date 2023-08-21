import React from 'react'
import StaticComps from '../components/StaticComps'
import TitleBar from '../components/TitleBar'
import Footer from '../components/Footer'
import { useState } from 'react'
import StatusCards from '../components/ServiceRequest/StatusCards'
import { NavLink } from 'react-router-dom'

const PunchlistPage = () => {
    const icon = <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.5096 2.53165H7.41104C5.50437 2.52432 3.94146 4.04415 3.89654 5.9499V15.7701C3.85437 17.7071 5.38979 19.3121 7.32671 19.3552C7.35512 19.3552 7.38262 19.3561 7.41104 19.3552H14.7343C16.6538 19.2773 18.1663 17.6915 18.1525 15.7701V7.36798L13.5096 2.53165Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.2688 2.52084V5.18742C13.2688 6.48909 14.3211 7.54417 15.6228 7.54784H18.1482" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.0974 14.0786H8.1474" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.2229 10.6388H8.14655" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

    const [returnElement, setReturnElement] = useState();
    const hideOptional = () => {
        const checkbox = document.getElementById('customCheckBox1');
        if (checkbox.checked) {
            setReturnElement(
                <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Photo (After)</label>
                    <div className="col-sm-9">
                        <input type="file" className="form-control" placeholder="" />
                    </div>
                </div>
            )
        }
        else {
            setReturnElement(false)
        }
    }
    return (
        <>
            <StaticComps />
            <div className="content-body">
                <TitleBar icon={icon} title='Punchlists' />
                <div className="container-fluid">
                    <div className="row">
                        <div class="col-xl-3  col-lg-6 col-sm-6">
                            <div class="widget-stat card">
                                <div class="card-body p-4">
                                    <div class="media ai-icon">
                                        <span class="me-3 bgl-warning text-warning">
                                            <svg id="icon-orders" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                <polyline points="10 9 9 9 8 9"></polyline>
                                            </svg>
                                        </span>
                                        <div class="media-body">
                                            <p class="mb-1">Open</p>
                                            <h4 class="mb-0">5131</h4>
                                            <span class="badge badge-warning">30%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3  col-lg-6 col-sm-6">
                            <div class="widget-stat card">
                                <div class="card-body p-4">
                                    <div class="media ai-icon">
                                        <span class="me-3 bgl-success text-success">
                                            <svg id="icon-database-widget" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database">
                                                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                            </svg>
                                        </span>
                                        <div class="media-body">
                                            <p class="mb-1">Total</p>
                                            <h4 class="mb-0">77799</h4>
                                            <span class="badge badge-success">100%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body p-0">
                                    <div className="tbl-caption">
                                        <div className="row p-3 ">
                                            <div className="col-md-6">
                                                <a className="btn btn-primary btn-md" data-bs-toggle="modal" data-bs-target="#basicModal" >+ Add Punchlist</a>
                                            </div>
                                            <div class="col-md-6" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <div className="col-md-3">
                                                    <select class="default-select form-control wide" id="inlineFormCustomSelect">
                                                        <option selected>All</option>
                                                        <option value="1">Current Month</option>
                                                        <option value="2">Previous Month</option>
                                                    </select>
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
                                                   
                                                  
                                                    <th>Customer Name</th>
                                                    <th>Title</th>
                                                    <th>Assigned to</th>
                                                    <th>Date Created</th>
                                                    <th>Status</th>
                                                    <th>Report</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="form-check custom-checkbox ms-2">
                                                            <input type="checkbox" className="form-check-input" id="customCheckBox2" required="" />
                                                            <label className="form-check-label" htmlFor="customCheckBox2"></label>
                                                        </div>
                                                    </td>
                                                    <td>Vincente, Allan</td>
                                                    <td>
                                                        PL-1001
                                                    </td>
                                                   
                                                    <td>Sunrise Lane</td>
                                                    
                                                    <td>1/17/2014</td>
                                                    <td>Closed</td>
                                                    <td>
                                                    <NavLink to='/PunchlistPreview'>
                        <span class="badge badge-primary light border-0 me-1">Open</span>
                    </NavLink></td>
                                                </tr>
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
                                    <h5 className="modal-title">Add Punchlist</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal">
                                    </button>
                                </div>
                                <form>
                                    <div className="modal-body">
                                        <div className="basic-form">
                                            <div className="mb-3 row">
                                                <label className="col-sm-3 col-form-label">Photo</label>
                                                <div className="col-sm-9">
                                                    <input class="form-control" type="file" id="formFile" />
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label className="col-sm-3 col-form-label">Notes</label>
                                                <div className="col-sm-9">
                                                    <textarea class="form-control" placeholder=""></textarea>
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label className="col-sm-3 col-form-label">Adress</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div class="form-check custom-checkbox mx-3 mb-3" onClick={hideOptional}>
                                                    {/* <div className="col-sm-3"> */}
                                                    <input type="checkbox" class="form-check-input" id="customCheckBox1" />
                                                    {/* </div> */}
                                                    {/* <div className="col-sm-9"> */}
                                                    <label class="form-check-label" for="customCheckBox1">After Photo</label>
                                                    {/* </div> */}
                                                </div>
                                            </div>
                                            {/* <div className="mb-3 row">
                                        <label className="col-sm-3 col-form-label">After Photo</label>
                                    </div> */}

                                            {returnElement}
                                            <div className="row">
                                                <div class="form-check custom-checkbox mx-3">
                                                    {/* <div className="col-sm-3"> */}
                                                    <input type="checkbox" class="form-check-input" id="customCheckBox2" />
                                                    {/* </div> */}
                                                    {/* <div className="col-sm-9"> */}
                                                    <label class="form-check-label" for="customCheckBox2">Complete ?</label>
                                                    {/* </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                                        <NavLink to='/PunchlistPreview'>
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                                        </NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PunchlistPage
