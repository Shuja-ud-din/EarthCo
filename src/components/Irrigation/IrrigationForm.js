import React from 'react'
import { NavLink } from 'react-router-dom'
const IrrigationForm = () => {
    return (
        <>
            <div className="card-body">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="itemtitleBar">
                            <h4>General Information</h4>
                        </div>
                        <div className="card-body" style={{ padding: '1.5rem 5rem' }}>
                            <div class="basic-form">
                                <form>
                                    <div class="row flexCenter">
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Customer Name</h5>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Customer Name" />
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Created</h5>
                                            </div>
                                            <input type="date" class="form-control" placeholder="Created" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body p-0">
                        <div className="itemtitleBar">
                            <h4>Controller Info</h4>
                        </div>
                        <div className="card-body" style={{ padding: '1.5rem 4rem' }}  >
                            <div class="basic-form">
                                <form>
                                    <div class="row mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Controller Make and Model</h5>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Customer Name" />
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Photo of Controller</h5>
                                            </div>
                                            <input type='file' class="form-control" placeholder="Created" />
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Serial Number</h5>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Serial Number" />
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Controller Location Closest Adress</h5>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Controller Location Closest Adress" />
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Satellite Based</h5>
                                            </div>
                                            <div className="col-md-12 yesNoBtns">
                                                <button type="button" class="btn light btn-dark col-md-6 YNbtn1">Yes</button>
                                                <button type="button" class="btn light btn-dark col-md-6 YNbtn2">No</button>
                                            </div>
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Type of Water</h5>
                                            </div>
                                            <div className="col-md-12 yesNoBtns">
                                                <button type="button" class="btn light btn-dark col-md-6 YNbtn1">Portable</button>
                                                <button type="button" class="btn light btn-dark col-md-6 YNbtn2">Reclaimed</button>
                                            </div>
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Meter Number</h5>
                                            </div>
                                            <input type="number" class="form-control" placeholder="" />
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Meter Size</h5>
                                            </div>
                                            <div className="col-md-12 yesNoBtns">
                                                <button type="button" class="btn light btn-dark col-md-2 YNbtn1">1/2</button>
                                                <button type="button" class="btn light btn-dark col-md-3 YNbtnMid borderRight">3/4 "</button>
                                                <button type="button" class="btn light btn-dark col-md-2 YNbtnMid borderRight">1 "</button>
                                                <button type="button" class="btn light btn-dark col-md-3 YNbtnMid borderRight">11/2 "</button>
                                                <button type="button" class="btn light btn-dark col-md-2 YNbtn2">2 "</button>
                                            </div>
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Number of Stations</h5>
                                            </div>
                                            <input type="number" class="form-control" placeholder="" />
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Number of Valves</h5>
                                            </div>
                                            <input type="number" class="form-control" placeholder="" />
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Number of Broken Main Lines</h5>
                                            </div>
                                            <input type="number" class="form-control" placeholder="" />
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Type of Valves</h5>
                                            </div>
                                            <div className="col-md-12 yesNoBtns">
                                                <button type="button" class="btn light btn-dark col-md-4 YNbtn1">Plastic</button>
                                                <button type="button" class="btn light btn-dark col-md-4 YNbtnMid borderRight">Brass</button>
                                                <button type="button" class="btn light btn-dark col-md-4 YNbtn2">Mixed</button>
                                            </div>
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Leaking Valves</h5>
                                            </div>
                                            <input type="text" class="form-control" placeholder="" />
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Malfunctioning Valves</h5>
                                            </div>
                                            <input type="text" class="form-control" placeholder="" />
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Number of Broken Lateral Lines</h5>
                                            </div>
                                            <input type="number" class="form-control" placeholder="" />
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Number of Broken Heads</h5>
                                            </div>
                                            <input type="number" class="form-control" placeholder="" />
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Repairs Made</h5>
                                            </div>
                                            <div className="col-md-12">
                                                <textarea className="form-txtarea form-control" rows="4" id="comment"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Upgrades Made</h5>
                                            </div>
                                            <div className="col-md-12">
                                                <textarea className="form-txtarea form-control" rows="4" id="comment"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">
                                            <div className="col-md-12">
                                                <h5>Photo</h5>
                                            </div>
                                            <input type="file" class="form-control" placeholder="Capture Photo" />
                                        </div>
                                        <div class="col-sm-5 mx-2 mb-3">

                                        </div>
                                    </div>
                                    <div class="row text-end">
                                        <div>
                                            <NavLink to='/Dashboard/Irrigation'>
                                                <button type='button' class="btn btn-primary me-1">Submit</button>
                                            </NavLink>
                                            <NavLink to='/Dashboard/Irrigation'>
                                                <button class="btn btn-danger light ms-1">Cancel</button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IrrigationForm
