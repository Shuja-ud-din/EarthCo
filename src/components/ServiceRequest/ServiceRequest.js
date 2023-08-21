import React from 'react'

const ServiceRequest = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
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
                </div>
            </div>
        </>
    )
}

export default ServiceRequest
