import React from 'react'

const AdressModal = ({ boolState }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        boolState(true);
    }
    return (
        <div className="adressmodal">
            <div class="card" style={{ marginBottom: '0px' }}>
                <div class="card-header" style={{ background: '#f8f4f4' }}>
                    <h4 class="card-title">Adress</h4>
                </div>
                <div class="card-body">
                    <div class="basic-form">
                        <form onSubmit={handleSubmit}>
                            <div className="col-md-12 mb-2">
                                <input type="text" class="form-control input-default " placeholder="Adress Line 1" />
                            </div>
                            <div className="col-md-12 mb-2">
                                <input type="text" class="form-control input-default " placeholder="Room / Suite / Apt #" />
                            </div>
                            <div className="col-md-12 mb-2">
                                <input type="text" class="form-control input-default " placeholder="City" />
                            </div>
                            <div className="col-md-12 mb-2">
                                <input type="text" class="form-control input-default " placeholder="State" />
                            </div>
                            <div className="col-md-12 mb-2">
                                <input type="text" class="form-control input-default " placeholder="Postal Code" />
                            </div>
                            <div className="col-md-12 mb-2">
                                <input type="text" class="form-control input-default " placeholder="Country" />
                            </div>
                            <div className="col-md-12 mt-3 text-end">
                                <button type='button' onClick={handleSubmit} className="btn btn-primary">Done</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdressModal
