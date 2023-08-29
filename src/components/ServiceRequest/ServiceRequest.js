import React, { useContext } from 'react'
import TitleBar from '../TitleBar'
import { RoutingContext } from '../../context/RoutesContext'
import { Form } from 'react-bootstrap'
import AddSRform from './AddSRform'

const ServiceRequest = () => {

    const { SRroute } = useContext(RoutingContext)

    const icon = <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.64111 13.5497L9.38482 9.9837L12.5145 12.4421L15.1995 8.97684" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="18.3291" cy="3.85021" rx="1.76201" ry="1.76201" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.6808 2.86012H7.01867C4.25818 2.86012 2.54651 4.81512 2.54651 7.57561V14.9845C2.54651 17.7449 4.22462 19.6915 7.01867 19.6915H14.9058C17.6663 19.6915 19.3779 17.7449 19.3779 14.9845V8.53213" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

    return (
        <>
            <TitleBar icon={icon} title={SRroute} />
            <div className="card-body">
                <div className="basic-form">
                    <form>
                        <div className="row">
                            <div className="mb-3 col-md-4">
                                <label className="form-label">Customer</label>
                                <Form.Select aria-label="Default select example" className='bg-white' size="md">
                                    <option>Select Custmer...</option>
                                    <option>Hillandale Ave</option>
                                    <option>Crest DeVille</option>
                                </Form.Select>
                                {/* <select class="me-sm-2 default-select form-control wide" id="inlineFormCustomSelect">
                                        <option>Select Custmer...</option>
                                        <option>Hillandale Ave</option>
                                        <option>Crest DeVille</option>
                                    </select> */}
                            </div>
                            <div className="mb-3 col-md-4">
                                <label className="form-label">Service Location</label>
                                <Form.Select aria-label="Default select example" className='bg-white' size="md">
                                    <option>Select Service Location...</option>
                                    <option>Keystone Pacific</option>
                                    <option>Brian Jacobs</option>
                                </Form.Select>
                                {/* <select class="me-sm-2 default-select form-control wide" id="inlineFormCustomSelect">
                                        <option>Select Service Location...</option>
                                        <option>Keystone Pacific</option>
                                        <option>Brian Jacobs</option>
                                    </select> */}
                            </div>
                            <div className="mb-3 col-md-4">
                                <label>Contact</label>
                                <Form.Select aria-label="Default select example" className='bg-white' size="md">
                                    <option>Select Contact...</option>
                                    <option>mark334@gmail.com</option>
                                    <option>Jchavis@keystonepacific.com</option>
                                </Form.Select>
                                {/* <select class="me-sm-2 default-select form-control wide" id="inlineFormCustomSelect">
                                        <option>Select Contact...</option>
                                        <option>mark334@gmail.com</option>
                                        <option>Jchavis@keystonepacific.com</option>
                                    </select> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container-fluid">
                {/* <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="estDataBox">
                                    <div className="itemtitleBar">
                                        <h4>Maintainence Report</h4>
                                    </div>
                                    <div className="basic-form">
                                        <form className='SRdetailsForm srReportForm'>
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <h5>Supervisor Visited the job weekly</h5>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <input type="checkbox" class="form-check-input" id="customCheckBox2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <h5>Completed Litter pickup of ground areas</h5>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <input type="checkbox" class="form-check-input" id="customCheckBox2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <h5>Completed sweeping or blowing of walkways</h5>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <input type="checkbox" class="form-check-input" id="customCheckBox2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <h5>High priority areas were Visited weekly</h5>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <input type="checkbox" class="form-check-input" id="customCheckBox2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <h5>V Ditches were cleaned and inspected</h5>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <input type="checkbox" class="form-check-input" id="customCheckBox2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
                                                    <div className="col-md-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <h5>Weep screen inspectedand cleaned in rotation section</h5>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <form>
                                                            <select className="default-select  form-control wide" >
                                                                <option>Select</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                            </select>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="estDataBox">
                                    <div className="itemtitleBar">
                                        <h4>Lawn Maintainence</h4>
                                    </div>
                                    <div className="basic-form">
                                        <form className='SRdetailsForm srReportForm'>
                                            <div className="col-md-12">
                                                <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
                                                    <div className="col-md-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <h5>Fertilization of truf occoured</h5>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <input name="datepicker" class="datepicker-default form-control" id="datepicker" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <h5>Truf was moved and edged weekly</h5>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <input type="checkbox" class="form-check-input" id="customCheckBox2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="estDataBox">
                                    <div className="itemtitleBar">
                                        <h4>Shrub Maintainence</h4>
                                    </div>
                                    <div className="basic-form">
                                        <form className='SRdetailsForm srReportForm'>
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <h5>Shrubs trimmed according to rotation schedule</h5>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <input type="checkbox" class="form-check-input" id="customCheckBox2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
                                                    <div className="col-md-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <h5>Fertilization of Shrubs occoured</h5>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <input name="datepicker" class="datepicker-default form-control" id="datepicker" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="estDataBox">
                                    <div className="itemtitleBar">
                                        <h4>Ground cover and flowerbed Maintainence</h4>
                                    </div>
                                    <div className="basic-form">
                                        <form className='SRdetailsForm srReportForm'>
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <h5>Watering of flowerbeds Completed and checked</h5>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <input type="checkbox" class="form-check-input" id="customCheckBox2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="estDataBox">
                                    <div className="itemtitleBar">
                                        <h4>Irrigation System</h4>
                                    </div>
                                    <div className="basic-form">
                                        <form className='SRdetailsForm srReportForm'>
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <h5>Heads were adjusted for maximum coverage</h5>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <input type="checkbox" class="form-check-input" id="customCheckBox2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <h5>Repairs were made to maintain an effective system</h5>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <input type="checkbox" class="form-check-input" id="customCheckBox2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <h5>Controllers were inspected and adjusted</h5>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <input type="checkbox" class="form-check-input" id="customCheckBox2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <h5>Main line was repaired</h5>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <input type="checkbox" class="form-check-input" id="customCheckBox2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <h5>Valve(s) was repaired</h5>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <input type="checkbox" class="form-check-input" id="customCheckBox2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="estDataBox">
                                    <div className="itemtitleBar">
                                        <h4>Rotation</h4>
                                    </div>
                                    <div className="basic-form">
                                        <form className='SRdetailsForm srReportForm'>
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <h5>This month's expected rotation schedule</h5>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div class="basic-form">
                                                            <form>
                                                                <div class="mb-3">
                                                                    <textarea class="form-txtarea form-control" rows="3" id="comment"></textarea>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="estDataBox">
                                    <div className="itemtitleBar">
                                        <h4>Extra Information</h4>
                                    </div>
                                    <div className="basic-form">
                                        <form className='SRdetailsForm srReportForm'>
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <h5>Notes</h5>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div class="basic-form">
                                                            <form>
                                                                <div class="mb-3">
                                                                    <textarea class="form-txtarea form-control" rows="3" id="comment"></textarea>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
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
        </>
    )
}

export default ServiceRequest
